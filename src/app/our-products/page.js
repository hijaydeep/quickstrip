import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Product from '@/components/Product';

export const metadata = {
    title: "Products - QuickStrip Dental",
};

const page = () => {

    return (
        <>
            <Breadcrumb title="Products" item="Products" />
            <Product />
        </>
    );
};

export default page;