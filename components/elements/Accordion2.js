'use client'
import { useState } from 'react'
export default function Accordion2() {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <div className="tf-flat-accordion2">
                <div className="flat-toggle2">
                    <h6 className={isActive === 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(1)}>Where we can buy and sell NFts ?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>
                        <p>Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
                        </p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6 className={isActive === 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(2)}>Who are the team behind the project?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>
                        <p>Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
                        </p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6 className={isActive === 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(3)}>What is your contract address ?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>
                        <p>Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
