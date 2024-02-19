"use client";
import React, { useState, useEffect } from 'react';

const ScrollTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > window.innerHeight / 4);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {isVisible && (
                <div className="aux-goto-top-btn aux-align-btn-right" onClick={scrollToTop} style={{ display: 'block', transform: 'translateY(0px)' }}>
                    <div className="aux-hover-slide aux-arrow-nav aux-round aux-outline">
                        <span className="aux-overlay" />
                        <span className="aux-svg-arrow aux-h-small-up" />
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white dark:text-black">
                            <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <span className="aux-hover-arrow aux-h-small-up" />
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollTop;