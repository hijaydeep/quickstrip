import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Contact from '@/components/Contact';

export const metadata = {
    title: "Contact Us - QuickStrip Dental",
};

const page = () => {

    return (
        <>
            <Breadcrumb title="Contact Us" item="Contact Us" />
            <Contact />
        </>
    );
};

export default page;