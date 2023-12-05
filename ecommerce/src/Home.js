import React from 'react'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <img className='home-image' src='https://m.media-amazon.com/images/I/71j8damPo5L._SX3000_.jpg' alt='pic'/>
      <div className='product__div'>
      <Product
      id='1234'
      title='Deals in PCs'
      price={11.96}
      rating={3}
      images = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg"
      />
      </div>
    </div>
  )
}

export default Home
