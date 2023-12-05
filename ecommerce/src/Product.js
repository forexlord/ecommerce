import React from 'react'
import './product.css'

function Product( {price, id , title, images,rating} ) {
  return (
    <div className='product'>

      <div className='product__info'>
      <p>{title}</p>
      <p className='product__price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className='product__rating'>
        {
            Array(rating).fill().map((_)=>(
                <p>⭐</p>
            ))
        }
      </div>
        </div>

      <img src={images}/>
      <button>Add to cart</button>
    </div>
  )
}

export default Product
