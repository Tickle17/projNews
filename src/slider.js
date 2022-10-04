// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import tv1 from "./img/1tv.png"
import BBC from "./img/image 2.svg"
import ABC from "./img/Untitled-2 1.svg"
import JAZEERA from "./img/Untitled-3 1.svg"
import CNN from "./img/Untitled-4 1.svg"
import rus1 from "./img/russia1.png"
import Fox from "./img/logo.svg"




import { Navigation } from "swiper";

export default function Sviper(){
  return (
    <Swiper
      spaceBetween={32}
      slidesPerView={6}
      navigation={true} modules={[Navigation]} className="mySwiper"
    >
      <SwiperSlide style={{borderRadius:"10px"}}>
        <div style={{height:"158px", width:'152px'}}>
          <div style={{height:"80px"}}>
        <img style={{display:"block",maxHeight:'55px',marginTop:"50px"}} src={tv1} alt=""/>
          </div>
        <div style={{display:"block", height:"24px",marginBottom:"16px"}}>Первый канал</div>
      </div>
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:"10px"}}>
        <div style={{height:"158px", width:'152px'}}>
        <div style={{height:"80px"}}>
          <img style={{display:"block",maxHeight:'55px',marginTop:"50px"}} src={rus1} alt=""/>
        </div>
        <div style={{display:"block", height:"24px",marginBottom:"16px"}}>Россия 1</div>
      </div>
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:"10px"}}>
        <div style={{height:"158px", width:'152px'}}>
        <div style={{height:"80px"}}>
          <img style={{display:"block",maxHeight:'55px',marginTop:"50px",width:"55px",marginLeft:"45px"}} src={Fox} alt=""/>
        </div>
        <div style={{display:"block", height:"24px",marginBottom:"16px"}}>FOX NEWS</div>
      </div>
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:"10px"}}>
        <div style={{height:"158px", width:'152px'}}>
          <div style={{height:"80px"}}>
            <img style={{display:"block",height:'33px',marginTop:"50px", width:"128px",marginLeft:"10px"}} src={CNN} alt=""/>
          </div>
          <div style={{display:"block", height:"24px",marginBottom:"16px"}}>CNN NEWS</div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:"10px"}}>
        <div style={{height:"158px", width:'152px'}}>
          <div style={{height:"80px"}}>
            <img style={{display:"block", maxHeight:'55px',maxWidth:"80px",margin:"36px",}} src={JAZEERA} alt=""/>
          </div >
          <div style={{display:"block", height:"24px",marginBottom:"16px"}}>AL JAZEERA</div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:"10px"}}>
        <div style={{height:"158px", width:'152px'}}>
          <div style={{height:"80px"}}>
            <img style={{display:"block",maxHeight:'45px',marginTop:"50px",}} src={ABC} alt=""/>
          </div >
          <div style={{display:"block", height:"24px",marginBottom:"16px"}}>ABC NEWS</div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:"10px"}}>
          <div style={{height:"158px", width:'152px'}}>
            <div style={{height:"80px"}}>
              <img style={{display:"block",maxHeight:'55px',marginTop:"50px",width:"55px",marginLeft:"45px"}} src={Fox} alt=""/>
            </div>
            <div style={{display:"block", height:"24px",marginBottom:"16px"}}>FOX NEWS</div>
          </div>
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:"10px"}}>
        <div style={{height:"158px", width:'152px'}}>
          <div style={{height:"80px"}}>
            <img style={{display:"block",maxHeight:'25px',marginTop:"50px",width:"80px",marginLeft:"35px"}} src={BBC} alt=""/>
          </div>
        <div style={{display:"block", height:"24px",marginBottom:"16px"}}>BBC NEWS</div>
      </div></SwiperSlide>
      <SwiperSlide style={{borderRadius:"10px"}}>
        <div style={{height:"158px", width:'152px'}}>
          <div style={{height:"80px"}}>
            <img style={{display:"block", maxHeight:'55px',maxWidth:"80px", margin:"36px"}} src={rus1} alt=""/>
          </div>
          <div style={{display:"block", height:"24px",marginBottom:"16px"}}>Россия 1</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};