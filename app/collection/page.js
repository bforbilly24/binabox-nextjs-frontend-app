'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Collections() {
    const [isActive, setIsActive] = useState([1])

    // const handleClick = (key) => {
    //     setIsActive(prevState => prevState.includes(k)ey ? null : key)
    // }
    const handleClick = (index) => {
        // setIsActive((prevIndex) => (prevIndex.includes(i)ndex ? null : index))
        setIsActive(prevIndexes => {
            if (prevIndexes.includes(index)) {
              return prevIndexes.filter(item => item !== index);
            } else {
              return [...prevIndexes, index];
            }
          });
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="COLLECTIONS">
                <section className="tf-collection-inner">
                    <div className="tf-container">
                        <div className="row ">
                            <div className="col-lg-3 col-md-4">
                                <div className="sidebar sidebar-collection">
                                    <div className="widget widget-clothing widget-accordion">
                                        <h6 className={isActive.includes(1) ? "widget-title active" : "widget-title"} onClick={() => handleClick(1)}>CLOTHING</h6>
                                        <div className="widget-content" style={{ display: `${isActive.includes(1) ? "block" : "none"}` }}>
                                            <form action="#" className="form-checkbox">
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Combatant</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Ninja</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>King</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Queen</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Robot</span>
                                                </label>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget widget-eyes widget-accordion">
                                        <h6 className={isActive.includes(2) ? "widget-title active" : "widget-title"} onClick={() => handleClick(2)}>EYES</h6>
                                        <div className="widget-content" style={{ display: `${isActive.includes(2) ? "block" : "none"}` }}>
                                            <form action="#" className="form-checkbox">
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Yellow</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Green</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Mix</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Orange</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>glow</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Blue</span>
                                                </label>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget widget-face widget-accordion">
                                        <h6 className={isActive.includes(3) ? "widget-title active" : "widget-title"} onClick={() => handleClick(3)}>FACE</h6>
                                        <div className="widget-content" style={{ display: `${isActive.includes(3) ? "block" : "none"}` }}>
                                            <form action="#" className="form-checkbox">
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Yellow</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Green</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Mix</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Orange</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>glow</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Blue</span>
                                                </label>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget widget-skin widget-accordion">
                                        <h6 className={isActive.includes(4) ? "widget-title active" : "widget-title"} onClick={() => handleClick(4)}>SKIN</h6>
                                        <div className="widget-content" style={{ display: `${isActive.includes(4) ? "block" : "none"}` }}>
                                            <form action="#" className="form-checkbox">
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Yellow</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Green</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Mix</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Orange</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>glow</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Blue</span>
                                                </label>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget widget-background widget-accordion">
                                        <h6 className={isActive.includes(5) ? "widget-title active" : "widget-title"} onClick={() => handleClick(5)}>BACKGROUND</h6>
                                        <div className="widget-content" style={{ display: `${isActive.includes(5) ? "block" : "none"}` }}>
                                            <form action="#" className="form-checkbox">
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Yellow</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Green</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Mix</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Orange</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>glow</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Blue</span>
                                                </label>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget widget-special widget-accordion">
                                        <h6 className={isActive.includes(6) ? "widget-title active" : "widget-title"} onClick={() => handleClick(6)}>SPECIAL</h6>
                                        <div className="widget-content" style={{ display: `${isActive.includes(6) ? "block" : "none"}` }}>
                                            <form action="#" className="form-checkbox">
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Cat</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Sakura</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" defaultChecked="checked" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Snake</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Eath</span>
                                                </label>
                                                <label className="checkbox-item">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                    </span>
                                                    <span>Water</span>
                                                </label>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 ">
                                <div className="top-option">
                                    <h2 className="heading">All Items</h2>
                                    <div className="widget widget-search">
                                        <form action="#">
                                            <input type="text" placeholder="Search NFT" required />
                                            <Link className="btn-search" href="#"><i className="icon-fl-search-filled" /></Link>
                                        </form>
                                    </div>
                                </div>
                                <ul className="filter-content">
                                    <li><Link href="#">King <i className="fal fa-times" /></Link></li>
                                    <li><Link href="#">Mix <i className="fal fa-times" /></Link></li>
                                    <li><Link href="#">Skacura <i className="fal fa-times" /></Link></li>
                                    <li><Link href="#">Clear All</Link></li>
                                </ul>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="tf-product">
                                            <div className="image">
                                                <img src="/assets/images/product/product2.jpg" alt="Image" />
                                            </div>
                                            <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="tf-product">
                                            <div className="image">
                                                <img src="/assets/images/product/product1.jpg" alt="Image" />
                                            </div>
                                            <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="tf-product">
                                            <div className="image">
                                                <img src="/assets/images/product/product5.jpg" alt="Image" />
                                            </div>
                                            <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="tf-product">
                                            <div className="image">
                                                <img src="/assets/images/product/product3.jpg" alt="Image" />
                                            </div>
                                            <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="tf-product">
                                            <div className="image">
                                                <img src="/assets/images/product/product4.jpg" alt="Image" />
                                            </div>
                                            <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="tf-product">
                                            <div className="image">
                                                <img src="/assets/images/product/product6.jpg" alt="Image" />
                                            </div>
                                            <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="tf-product">
                                            <div className="image">
                                                <img src="/assets/images/product/product7.jpg" alt="Image" />
                                            </div>
                                            <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="tf-product">
                                            <div className="image">
                                                <img src="/assets/images/product/product8.jpg" alt="Image" />
                                            </div>
                                            <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="tf-product">
                                            <div className="image">
                                                <img src="/assets/images/product/product9.jpg" alt="Image" />
                                            </div>
                                            <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}