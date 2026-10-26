'use client'
import ProductContext from '@/Context/ProductContext';
import React, { useContext } from 'react';
import ItemCard from '../Card/ItemCard';
import ProductGridSkeleton from '../Card/Skeleton';

const toBn = (value, options) =>
    Number(value).toLocaleString("bn-BD", options);

const AllProduct = () => {
    const { products, loading } = useContext(ProductContext)
    if (loading) {
        return <ProductGridSkeleton></ProductGridSkeleton>
    }
    // const filteredProducts = products.filter(product => product?.change?.dir === 'up');
    return (
        <div className='max-w-7xl mx-auto mt-12'>
            <p className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-3'>
                সব পণ্য </p>
            <p className='text-sm text-gray-600 mb-3'>মোট  {toBn(products?.length)} টি পণ্য দেখানো হচ্ছে</p>
            <div id='product' className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 z-10'>
                {
                    products.map((item, idx) => {
                        return <ItemCard item={item} key={idx} ></ItemCard>;
                    })
                }

            </div>
        </div>
    );
};

export default AllProduct;