import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://m.media-amazon.com/images/I/71j8damPo5L._SX3000_.jpg"
          alt="pic"
        />

        <div className="home__row">
          <Product
            id="1"
            title="ASUS C424MA-AS48F Chromebook C424, 14.0 180 Degree FHD NanoEdge Display, Intel Dual Core Celeron Processor, 4GB LPDDR4 RAM, 128GB Storage, Silver Color, C424MA-AS48F"
            price={178.99}
            rating={4}
            images="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71DL+S6ihBL._AC_UY218_.jpg"
          />
          <Product
            id="2"
            title="Apple iPhone 11, 64GB, Black - Unlocked (Renewed)"
            price={255.0}
            rating={5}
            images="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61MG3m5FhIL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="iPhone 13 Pro, 256GB, Graphite - Unlocked (Renewed Premium)"
            price={689.0}
            rating={5}
            images="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61eDXs9QFNL._AC_UY218_.jpg"
          />
          <Product
            id="4"
            title="Lenovo V15 Laptop, 15.6 FHD Display, AMD Ryzen 5 5500U Hexa-core Processor (Beat Intel i7-1065G7), 16GB RAM, 1TB SSD, HDMI, RJ45, Numeric Keypad, Wi-Fi, Windows 11 Pro, Black"
            price={492.95}
            rating={4}
            images="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71aoL3LtkrL._AC_SX679_.jpg"
          />
          <Product
            id="5"
            title="
          Galaxy S23 FE Cell Phone, 256GB, Unlocked Android Smartphone, Long Battery Life, Premium Processor, Tough Gorilla Glass Display, Hi-Res 50MP Camera, US Version, 2023, Graphite"
            price={559.99}
            rating={4}
            images="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71iQPXoiWYL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="INSIGNIA 43-inch Class F30 Series LED 4K UHD Smart Fire TV with Alexa Voice Remote (NS-43F301NA22, 2021 Model)"
            price={209.99}
            rating={5}
            images="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Q0HLbeLbL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
