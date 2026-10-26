
'use client'
import React, { useContext } from 'react';
import ItemCard from '../Card/ItemCard';
import ProductContext from '@/Context/ProductContext';
import ProductGridSkeleton from '../Card/Skeleton';



const IncreasingProduct = () => {

    const { products, loading } = useContext(ProductContext)
    if (loading) {
        return <ProductGridSkeleton></ProductGridSkeleton>
    }
    const filteredProducts = products
        .filter(product => product?.change?.dir === 'up')
        .sort((a, b) => (b?.change?.pct || 0) - (a?.change?.pct || 0)).slice(0, 6);
    return (
        <div className='max-w-7xl mx-auto mt-12'>
            <p className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-3'>
                <span className='text-red-500'>▲</span>
                আজ দাম বেড়েছে </p>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 z-10'>
                {
                    filteredProducts.map((item, idx) => {
                        return <ItemCard item={item} key={idx} ></ItemCard>;
                    })
                }

            </div>
        </div>
    );
};

export default IncreasingProduct;