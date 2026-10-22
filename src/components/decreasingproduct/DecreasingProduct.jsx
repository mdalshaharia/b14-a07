
'use client'
import React, { useContext } from 'react';
import ItemCard from '../Card/ItemCard';
import ProductContext from '@/Context/ProductContext';

const DecreasingProduct = () => {
    const { products } = useContext(ProductContext)

    const filteredProducts = products ? products.filter(product => product?.change?.dir === 'down') : [];

    return (

        <div className=' max-w-7xl mx-auto mt-12'>
            <p className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-3'>
                <span className='text-green-500'>▼</span>
                আজ দাম কমেছে </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    filteredProducts.map((item, idx) => {
                        return <ItemCard item={item} key={idx} />;
                    })
                }
            </div>
        </div>
    );
};


export default DecreasingProduct;