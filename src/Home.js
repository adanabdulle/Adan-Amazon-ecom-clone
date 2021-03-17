import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={3}
          />
          <Product
            id="49538094"
            title="PlayStation 5 Console"
            price={700}
            image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="13414955"
            title="Turtle Beach Stealth 600 White Gen 2 Wireless Gaming Headset for PlayStation 5 and PlayStation 4"
            price={99.95}
            image="https://images-na.ssl-images-amazon.com/images/I/61gsYpuZecL._SL1224_.jpg"
            rating={4}
          />
          <Product
            id="73424959"
            title="Portable Blender, Smoothie Blenders, Personal Size Blender USB Rechargeable Smoothies and Shakes Juicer Cup, 2000mAh Battery Strong Power Pink"
            price={22.95}
            image="https://images-na.ssl-images-amazon.com/images/I/61RrV1YwYxL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="337234505"
            title="New Apple iPhone 12 Pro (128GB, Pacific Blue) [Locked] + Carrier Subscription"
            price={999.0}
            image="https://m.media-amazon.com/images/I/71DVgBTdyLL._FMwebp__.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="22344549"
            title="2020 Newest Lenovo Ideapad 3 15 Laptop Computer/ 15.6 FHD/ 10th Gen Intel Core i3-1005G1 Beat i5-7200U/ 8GB DDR4"
            price={999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61iJi1MRJXL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
