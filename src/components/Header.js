"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Header = () => {

    const pathname = usePathname();

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`aux-elementor-header ${scrollPosition > 0 ? 'aux-sticky' : ''}`} id="site-elementor-header" itemScope="itemscope" itemType="https://schema.org/WPHeader" data-sticky-height={80}
                style={{
                    transition: 'all 0.4s ease-in-out',
                    behavior: 'smooth'
                }}>
                <div className="aux-wrapper">
                    <div className="aux-header aux-header-elements-wrapper">
                        <div data-elementor-type="header" data-elementor-id={71} className="elementor elementor-71">
                            <section className="elementor-section elementor-top-section elementor-element elementor-element-d9f9b02 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d9f9b02" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-default">
                                    <div className="aux-parallax-section elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-9617791" data-id={9617791} data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-element elementor-element-4dbd1c8 elementor-widget elementor-widget-aux_image" data-id="4dbd1c8" data-element_type="widget" data-widget_type="aux_image.default">
                                                <div className="elementor-widget-container">
                                                    <section className="widget-container aux-widget-image aux-alignnone aux-parent-au3ede4057">
                                                        <div className="aux-media-hint-frame ">
                                                            <div className="aux-media-image aux-hover-active">
                                                                <Link href="/" data-elementor-open-lightbox="no" data-original-width={858} data-original-height={389} data-caption="QuickStrip Dental" target="_self">
                                                                    <img
                                                                        width="858" height="389"
                                                                        src="/img/header_logo.png"
                                                                        className="aux-attachment aux-featured-image aux-attachment-id-122"
                                                                        alt="QuickStrip Dental" data-ratio="2.21" data-original-w="858"
                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aux-parallax-section elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-2aef2d6" data-id="2aef2d6" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-element elementor-element-c63e02d elementor-widget elementor-widget-aux_menu_box" data-id="c63e02d" data-element_type="widget" data-widget_type="aux_menu_box.default">
                                                <div className="elementor-widget-container">
                                                    <div className="aux-elementor-header-menu aux-nav-menu-element aux-nav-menu-element-c63e02d">
                                                        <div className="aux-burger-box" data-target-panel="overlay" data-target-content=".elementor-element-c63e02d .aux-master-menu">
                                                            <div className="aux-burger aux-lite-small">
                                                                <span className="mid-line" />
                                                            </div>
                                                        </div>
                                                        <nav id="master-menu-elementor-c63e02d" className="menu-main-menu-container">
                                                            <ul id="menu-main-menu" className="aux-master-menu aux-no-js aux-skin-classic aux-with-indicator aux-with-splitter aux-horizontal" data-type="horizontal" data-switch-type="toggle" data-switch-parent=".elementor-element-c63e02d .aux-fs-popup .aux-fs-menu" data-switch-width={768}>
                                                                <li id="menu-item-107" className={pathname === "/" ? "a1i0s0 menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-105 current_page_item menu-item-107 aux-menu-depth-0 aux-menu-root-1 aux-menu-item" : "a1i0s0 menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-107 aux-menu-depth-0 aux-menu-root-1 aux-menu-item aux-hover"}>
                                                                    <Link href="/" className="aux-item-content">
                                                                        <span className="aux-menu-label">Home</span>
                                                                    </Link>
                                                                </li>

                                                                <li id="menu-item-1260" className={pathname === "/our-products" ? "menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1233 current_page_item menu-item-1260 aux-menu-depth-0 aux-menu-root-2 aux-menu-item" : "menu-item menu-item-type-post_type menu-item-object-page menu-item-1260 aux-menu-depth-0 aux-menu-root-2 aux-menu-item aux-hover"}>
                                                                    <Link href="/our-products" className="aux-item-content">
                                                                        <span className="aux-menu-label">Products</span>
                                                                    </Link>
                                                                </li>

                                                                <li id="menu-item-109" className={pathname === "/about-us" ? "a1i0s0 menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-85 current_page_item menu-item-109 aux-menu-depth-0 aux-menu-root-3 aux-menu-item" : "a1i0s0 menu-item menu-item-type-post_type menu-item-object-page menu-item-109 aux-menu-depth-0 aux-menu-root-3 aux-menu-item aux-hover"}>
                                                                    <Link href="/about-us" className="aux-item-content">
                                                                        <span className="aux-menu-label">About Us</span>
                                                                    </Link>
                                                                </li>

                                                                <li id="menu-item-111" className={pathname === "/contact-us" ? "a1i0s0 menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-84 current_page_item menu-item-111 aux-menu-depth-0 aux-menu-root-4 aux-menu-item" : "a1i0s0 menu-item menu-item-type-post_type menu-item-object-page menu-item-111 aux-menu-depth-0 aux-menu-root-4 aux-menu-item aux-hover"}>
                                                                    <Link href="/contact-us" className="aux-item-content">
                                                                        <span className="aux-menu-label">Contact Us</span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                        <section className="aux-fs-popup aux-fs-menu-layout-center aux-indicator" style={{ display: 'none' }}>
                                                            <div className="aux-panel-close">
                                                                <div className="aux-close aux-cross-symbol aux-thick-medium" />
                                                            </div>
                                                            <div className="aux-fs-menu" data-menu-title />
                                                        </section>
                                                        {/* <section className="aux-fs-menu-layout-center aux-indicator" style={{ opacity: 1, transform: 0 }}>
                                                            <div className="aux-panel-close">
                                                                <div className="aux-close aux-cross-symbol aux-thick-medium" />
                                                            </div>
                                                            <div className="aux-fs-menu" data-menu-title />
                                                            <div className="aux-fs-menu">
                                                                <ul id="menu-main-menu" className="aux-master-menu aux-skin-classic aux-with-indicator aux-with-splitter aux-toggle aux-narrow" data-type="horizontal" data-switch-type="toggle" data-switch-parent=".elementor-element-c63e02d .aux-fs-popup .aux-fs-menu" data-switch-width={768}>
                                                                    <li id="menu-item-107" className="a1i0s0 menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-105 current_page_item menu-item-107 aux-menu-depth-0 aux-menu-root-1 aux-menu-item">
                                                                        <a href="https://quickstripdental.com/" className="aux-item-content">
                                                                            <span className="aux-menu-label">Home</span>
                                                                        </a>
                                                                    </li>
                                                                    <li id="menu-item-1260" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1260 aux-menu-depth-0 aux-menu-root-2 aux-menu-item">
                                                                        <a href="https://quickstripdental.com/our-products/" className="aux-item-content">
                                                                            <span className="aux-menu-label">Products</span>
                                                                        </a>
                                                                    </li>
                                                                    <li id="menu-item-109" className="a1i0s0 menu-item menu-item-type-post_type menu-item-object-page menu-item-109 aux-menu-depth-0 aux-menu-root-3 aux-menu-item">
                                                                        <a href="https://quickstripdental.com/about-us/" className="aux-item-content">
                                                                            <span className="aux-menu-label">About Us</span>
                                                                        </a>
                                                                    </li>
                                                                    <li id="menu-item-111" className="a1i0s0 menu-item menu-item-type-post_type menu-item-object-page menu-item-111 aux-menu-depth-0 aux-menu-root-4 aux-menu-item">
                                                                        <a href="https://quickstripdental.com/contact-us/" className="aux-item-content">
                                                                            <span className="aux-menu-label">Contact Us</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </section> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;