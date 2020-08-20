import React from 'react'
import logo from './am_banner.png';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
           <img className="banner_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        
        
        <div className="homeRow">

        <Product 
        id="1234456"
        title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
        price={179.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/71WPGXQLcLL._AC_UY436_FMwebp_QL65_.jpg"
        />
        <Product 
        id="1234456"
        title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
        price={179.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/71WPGXQLcLL._AC_UY436_FMwebp_QL65_.jpg"
        />
        
        
        </div>
        
        <div className="homeRow">

        <Product 
        id="1234456"
        title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
        price={179.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/71WPGXQLcLL._AC_UY436_FMwebp_QL65_.jpg"
        />
        <Product 
        id="1234456"
        title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
        price={179.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/71WPGXQLcLL._AC_UY436_FMwebp_QL65_.jpg"
        />
        <Product 
        id="1234456"
        title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
        price={179.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/71WPGXQLcLL._AC_UY436_FMwebp_QL65_.jpg"
        />


</div>
<div>
<Product 
        id="1234456"
        title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
        price={179.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/71WPGXQLcLL._AC_UY436_FMwebp_QL65_.jpg"
        />


</div>

        </div>
    )
}

export default Home
