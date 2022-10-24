// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
//Import Img
import news2 from "./img/Mask Group2.svg"
import news3 from "./img/maskgroup3.svg"
import clock from "./img/CLOCK.svg"

//Import func
import ImageBlock from "./newsApi/FeaturedDivBlocks";
import fetchNews from "./newsApi/NewsApi";
import {useEffect, useState} from "react";



export default function SviperFeatured(){

  const [news,setNews] =useState([])
  useEffect(()=>{
    fetchNews().then(data=>{
      setNews(data.articles)
      // console.log(data)
    })
  },[])
console.log(news)


  return (
    <Swiper
      spaceBetween={32}
      slidesPerView={3}
      navigation={true} modules={[Navigation]} className="mySwiper"
      style={{marginBottom:"32px", overflow:"hidden"}}
    >

      {
        news
          .filter(item => item.urlToImage != null && item.title !=null)
          .map(
        (item,index) =>(
        <SwiperSlide key={index}>
          <ImageBlock itemImage = {item.urlToImage} itemDescription = {item.title} itemLink = {item.url} itempubDate = {item.publishedAt}></ImageBlock>
          {/*{item.description}*/}
        </SwiperSlide>
        )
      )}
    </Swiper>)
      }