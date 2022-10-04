// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import news1 from "./img/Mask Group.svg"
import news2 from "./img/Mask Group2.svg"
import news3 from "./img/maskgroup3.svg"

import clock from "./img/CLOCK.svg"




import { Navigation } from "swiper";

export default function SviperFeatured(){
  return (
    <Swiper
      spaceBetween={32}
      slidesPerView={3}
      navigation={true} modules={[Navigation]} className="mySwiper"
      style={{marginBottom:"32px"}}
    >
      <SwiperSlide>
        <div style={{width:"336px", height:"246px",backgroundColor:"#F2F2F2"}}>
          <img style={{height:"176px"}} src={news1} alt=""/>
          <div style={{display:"flex",marginTop:"16px"}}>
            <div className="title" style={{textAlign:"left", marginRight:"40px"}}><span style={{textAlign:"left"}}>Travellers to pay more than $2K, Trudeau says</span></div>
            <div className="source" style={{}}>
              <div style={{borderRadius:"5px",backgroundColor:"rgba(80, 62, 157, 0.1)", height:"24px", width:"72px",fontSize:"11px",paddingTop:"7px"}}><span style={{paddingTop:"10px"}}>FOX NEWS</span></div>
              <div style={{display:"flex", marginTop:"5px"}}>
                <img style={{height:"13.71px", width:"13.71px",marginRight:"6.86px"}} src={clock} alt=""/>
                <span style={{fontSize:"12px"}}>2:00 pm</span>
              </div>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{width:"336px", height:"246px",backgroundColor:"#F2F2F2"}}>
          <img style={{height:"176px"}} src={news2} alt=""/>
          <div style={{display:"flex",marginTop:"16px"}}>
            <div className="title" style={{textAlign:"left", marginRight:"40px"}}><span style={{textAlign:"left"}}>Myanmar’s military seizes control of country over...</span></div>
            <div className="source" style={{}}>
              <div style={{borderRadius:"5px",backgroundColor:"rgba(80, 62, 157, 0.1)", height:"24px", width:"72px",fontSize:"11px",paddingTop:"7px"}}><span style={{paddingTop:"10px"}}>CNN NEWS</span></div>
              <div style={{display:"flex", marginTop:"5px"}}>
                <img style={{height:"13.71px", width:"13.71px",marginRight:"6.86px"}} src={clock} alt=""/>
                <span style={{fontSize:"12px"}}>2:00 pm</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{width:"336px", height:"246px",backgroundColor:"#F2F2F2"}}>
          <img style={{height:"176px"}} src={news3} alt=""/>
          <div style={{display:"flex",marginTop:"16px"}}>
            <div className="title" style={{textAlign:"left", marginRight:"40px"}}><span style={{textAlign:"left"}}>Pressure builds for Biden to cancel other pipeline...</span></div>
            <div className="source" style={{}}>
              <div style={{borderRadius:"5px",backgroundColor:"rgba(80, 62, 157, 0.1)", height:"24px", width:"72px",fontSize:"11px",paddingTop:"7px"}}><span style={{paddingTop:"10px"}}>BBC NEWS</span></div>
              <div style={{display:"flex", marginTop:"5px"}}>
                <img style={{height:"13.71px", width:"13.71px",marginRight:"6.86px"}} src={clock} alt=""/>
                <span style={{fontSize:"12px"}}>2:00 pm</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};