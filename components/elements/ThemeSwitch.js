'use client'
// ThemeSwitch.js
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "is_dark";
    });

    useEffect(() => {
        document.body.classList.remove("is_dark", "is_light");
        document.body.classList.add(theme);
        localStorage.setItem("theme", theme);
        updateImageSource(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "is_dark" ? "is_light" : "is_dark");
    };

    const updateImageSource = (currentTheme) => {
        const logoHeader = document.getElementById("logo_header");
        const imgMode = document.getElementById("img-mode");
        const workImages = document.querySelectorAll(".work-image");

        if (logoHeader) {
            logoHeader.src = currentTheme === "is_dark" ? "/assets/images/logo/logo_dark.png" : "/assets/images/logo/logo.png";
        }

        if (imgMode) {
            imgMode.src = `/assets/images/icon/${currentTheme === "is_dark" ? "sun" : "moon"}.png`;
        }

        workImages.forEach(image => {
            const imageName = currentTheme === "is_dark" ? "" : "-light";
            const imageId = image.id.split("-")[1];
            image.src = `/assets/images/svg/work-${imageId}${imageName}.svg`;
        });
    };

    return (
        <a className="mode-switch" onClick={toggleTheme}>
            <img id="img-mode" src={`/assets/images/icon/${theme === "is_dark" ? "sun" : "moon"}.png`} alt="Theme Switch" />
        </a>
    );
}
