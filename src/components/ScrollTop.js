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
                <div className="aux-goto-top-btn aux-align-btn-right" onClick={scrollToTop} style={{ display: isVisible ? 'block' : 'none', transform: isVisible ? 'translateY(0px)' : 'translateY(150px)' }}>
                    <div className="aux-hover-slide aux-arrow-nav aux-round aux-outline">
                        <span className="aux-overlay" />
                        <span className="aux-svg-arrow aux-h-small-up" />
                        <span className="aux-hover-arrow aux-h-small-up" />
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollTop;