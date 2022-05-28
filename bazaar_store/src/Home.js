import React from "react";
import "./Home.css";
import Product from "./Product";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}
        <div className="silder">
          <AwesomeSlider animation="cubeAnimation">
            <div
              className="sder"
              data-src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            />
            <div
              className="sder"
              data-src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
            />
            <div
              className="sder"
              data-src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            />
          </AwesomeSlider>
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="PRETTYGARDEN Women's Floral Summer Dress Wrap V Neck Short Sleeve Belted Ruffle Hem A-Line Bohemian Maxi Dresses"
            price={101.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71xjhd4aTvL._AC_UY445_.jpg"
          />
          <Product
            id="49538094"
            title="Saucony Men's Multi-Pack Mesh Ventilating Comfort Fit Performance No-Show Socks"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/91KC5HxCTzL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Neutrogena Makeup Remover Cleansing Face Wipes, Daily Cleansing Facial Towelettes to Remove Waterproof Makeup and Mascara, Alcohol-Free, Value Twin Pack, 25 Count, 2 Pack"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71V9rJ7roDL._SY355_.jpg"
          />
          <Product
            id="23445930"
            title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81ZB62prn-L._AC_SY355_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="2022 Newly Roses Toys for Female - Anniversary Birthday Gifts for Women (Red 2"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61EdxwPNn2L._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="REMOKING Dinosaur Toy Sets, Walking Dinosaurs with Light and Sound(2 Pack), Educational Realistic Roaring Sound and Spray Water Mist, Great Gifts for Kids of 3 Years up"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71C87eU651L._AC_SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="Meta Portal - Smart Video Calling for the Home with 10” Touch Screen Display - Black"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Pnf37j0pL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="2022 Newly Roses Toys for Female - Anniversary Birthday Gifts for Women (Red 2"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61EdxwPNn2L._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="REMOKING Dinosaur Toy Sets, Walking Dinosaurs with Light and Sound(2 Pack), Educational Realistic Roaring Sound and Spray Water Mist, Great Gifts for Kids of 3 Years up"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71C87eU651L._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
