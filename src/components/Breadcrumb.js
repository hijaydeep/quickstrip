import React from "react";
import Link from "next/link";


const Breadcrumb = ({ title, item }) => {

    return (
        <>
            <header id="site-title" className="page-title-section">
                <div className="page-header aux-wrapper aux-auto-height aux-boxed-container aux-center aux-top aux-dark aux-arrow-none" style={{ display: 'block' }}>
                    <div className="aux-container" >
                        <p className="aux-breadcrumbs">
                            <span className="aux-breadcrumb-sep breadcrumb-icon auxicon-chevron-right-1"></span>
                            <span>
                                <Link href="/">Home</Link>
                            </span>
                            <span className="aux-breadcrumb-sep breadcrumb-icon auxicon-chevron-right-1"></span>
                            <span>{title}</span>
                        </p>
                        <div className="aux-page-title-entry">
                            <div className="aux-page-title-box">
                                <section className="page-title-group" >
                                    <h1 className="page-title">{item}</h1>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Breadcrumb;