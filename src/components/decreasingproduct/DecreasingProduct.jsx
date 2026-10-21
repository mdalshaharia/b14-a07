'use client'
import React, { useContext } from 'react';
import ItemCard from '../Card/ItemCard';
import ProductContext from '@/Context/ProductContext';

const DecreasingProduct = () => {
    const { products } = useContext(ProductContext)

    const filteredProducts = products ? products.filter(product => product?.change?.dir === 'down') : [];

    return (
        <div className='flex justify-center border'>
            <div className='mx-auto border'>
                <p className="text-xl font-semibold mb-4">Decreasing Products</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        filteredProducts.map((item, idx) => {
                            return <ItemCard item={item} key={idx} />;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default DecreasingProduct;