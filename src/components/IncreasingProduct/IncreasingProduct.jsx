'use client'
import React, { useContext } from 'react';
import ItemCard from '../Card/ItemCard';
import ProductContext from '@/Context/ProductContext';



const IncreasingProduct = () => {

const { products } = useContext(ProductContext)
const filteredProducts = products.filter(product => product?.change?.dir === 'up');
    return (
        <div className = 'max-w-7xl mx-auto grid grid-cols-3 gap-5'>
{
    filteredProducts.map((item, idx) => {
        return <ItemCard item={item} key={idx} ></ItemCard>;
    })
}

        </div>
    );
};

export default IncreasingProduct;