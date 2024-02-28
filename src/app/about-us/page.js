import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import About from '@/components/About';

export const metadata = {
    title: "About Us - QuickStrip Dental",
};

const page = () => {

    return (
        <>
            <Breadcrumb title="About Us" item="About Us" />
            <About />
        </>
    );
};

export default page;