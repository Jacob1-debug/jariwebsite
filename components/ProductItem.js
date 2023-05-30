import React from 'react';
import Link from 'next/link';

export default function ProductItem({ product }) {
  return (
    <div className='card-container'>
      <div className='card'>
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className='rounded shadow'
          />
        </Link>
        <div className='card-body'>
          <Link className='text-lg' href={`/product/${product.slug}`}>
            <h2>{product.name}</h2>
          </Link>
          <p className='mb-2'>{product.brand}</p>
          <p>${product.price}</p>
          <button className='primary-button' type='button'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
