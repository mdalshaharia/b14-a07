
'use client'
import React, { useContext } from 'react';
import ItemCard from '../Card/ItemCard';
import ProductContext from '@/Context/ProductContext';



const IncreasingProduct = () => {

    const { products } = useContext(ProductContext)
    const filteredProducts = products.filter(product => product?.change?.dir === 'up');
    return (
        <div className='max-w-7xl mx-auto mt-12'>
            <p className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-3'>
                <span className='text-red-500'>▲</span>
                আজ দাম বেড়েছে </p>
            <div id='product' className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 z-10'>
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