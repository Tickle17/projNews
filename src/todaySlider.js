// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import like from "./img/like.svg"
import dislike from "./img/dislike.svg"
import clock from "./img/CLOCK.svg"
import img1 from "./img/cart1.svg"
import img2 from "./img/cart2.svg"
import img3 from "./img/cart3.svg"

import Fox from "./img/logo.svg"




import { Navigation } from "swiper";

export default function SviperToday(){
  return (
    <Swiper
      spaceBetween={32}
      slidesPerView={3}
      navigation={true} modules={[Navigation]} className="mySwiper"
      style={{marginBottom:"32px"}}
    >
      <SwiperSlide>
        <div style={{height:"96px",backgroundColor:"#F2F2F2"}}>
          <div style={{display:"flex"}}>
            <img style={{display:"block",height:"96px", width:"96px",borderRadius:"10px"}} src={img1} alt=""/>
            <div style={{width:"216px",height:"90px",marginLeft:"24px"}}>
              <div className="title" style={{marginLeft:"-23px",marginBottom:"20px"}}>Hate speech vs free speech</div>
              <div className="rating" style={{display:"flex"}}>
                <div className="like" style={{display:"flex"}}>
                  <img style={{width:"14.86px", height:"13px",marginRight:"3.14px"}} src={like} alt=""/>
                  <span style={{marginRight:"23px"}}>50</span>
                </div>
                <div className="dislike" style={{display:"flex"}}>
                  <img style={{width:"14.86px", height:"13px",marginRight:"3.14px"}} src={dislike} alt=""/>
                  <span style={{marginRight:"23px"}}>50</span>
                </div>
              </div>
              <div className="source" style={{justifyContent:"space-between",display:"flex",marginTop:"11px"}}>
                <div style={{borderRadius:"5px",backgroundColor:"rgba(80, 62, 157, 0.1)", height:"24px", width:"72px",fontSize:"11px",paddingTop:"7px",boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.25)"}}><span style={{paddingTop:"10px"}}>ABC NEWS</span></div>
                <div style={{display:"flex"}}>
                  <img style={{height:"13.71px", width:"13.71px"}} src={clock} alt=""/>
                  <span>2:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{height:"96px",backgroundColor:"#F2F2F2"}}>
          <div style={{display:"flex"}}>
            <img style={{display:"block",height:"96px", width:"96px",borderRadius:"10px"}} src={img2} alt=""/>
            <div style={{width:"216px",height:"90px",marginLeft:"24px"}}>
              <div className="title" style={{marginLeft:"-23px",marginBottom:"20px"}}>Hate speech vs free speech</div>
              <div className="rating" style={{display:"flex"}}>
                <div className="like" style={{display:"flex"}}>
                  <img style={{width:"14.86px", height:"13px",marginRight:"3.14px"}} src={like} alt=""/>
                  <span style={{marginRight:"23px"}}>50</span>
                </div>
                <div className="dislike" style={{display:"flex"}}>
                  <img style={{width:"14.86px", height:"13px",marginRight:"3.14px"}} src={dislike} alt=""/>
                  <span style={{marginRight:"23px"}}>50</span>
                </div>
              </div>
              <div className="source" style={{justifyContent:"space-between",display:"flex",marginTop:"11px"}}>
                <div style={{borderRadius:"5px",backgroundColor:"rgba(80, 62, 157, 0.1)", height:"24px", width:"72px",fontSize:"11px",paddingTop:"7px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}><span style={{paddingTop:"10px"}}>ABC NEWS</span></div>
                <div style={{display:"flex"}}>
                  <img style={{height:"13.71px", width:"13.71px"}} src={clock} alt=""/>
                  <span>2:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{height:"96px",backgroundColor:"#F2F2F2"}}>
          <div style={{display:"flex"}}>
            <img style={{display:"block",height:"96px", width:"96px",borderRadius:"10px"}} src={img3} alt=""/>
            <div style={{width:"216px",height:"90px",marginLeft:"24px"}}>
              <div className="title" style={{marginLeft:"-23px",marginBottom:"20px"}}>Hate speech vs free speech</div>
              <div className="rating" style={{display:"flex"}}>
                <div className="like" style={{display:"flex"}}>
                  <img style={{width:"14.86px", height:"13px",marginRight:"3.14px"}} src={like} alt=""/>
                  <span style={{marginRight:"23px"}}>50</span>
                </div>
                <div className="dislike" style={{display:"flex"}}>
                  <img style={{width:"14.86px", height:"13px",marginRight:"3.14px"}} src={dislike} alt=""/>
                  <span style={{marginRight:"23px"}}>50</span>
                </div>
              </div>
              <div className="source" style={{justifyContent:"space-between",display:"flex",marginTop:"11px"}}>
                <div style={{borderRadius:"5px",backgroundColor:"rgba(80, 62, 157, 0.1)", height:"24px", width:"72px",fontSize:"11px",paddingTop:"7px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}><span style={{paddingTop:"10px"}}>ABC NEWS</span></div>
                <div style={{display:"flex"}}>
                  <img style={{height:"13.71px", width:"13.71px"}} src={clock} alt=""/>
                  <span>2:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{height:"96px",backgroundColor:"#F2F2F2"}}>
          <div style={{display:"flex"}}>
            <img style={{display:"block",height:"96px", width:"96px",borderRadius:"10px"}} src={Fox} alt=""/>
            <div style={{width:"216px",height:"90px",marginLeft:"24px"}}>
              <div className="title" style={{marginLeft:"-23px",marginBottom:"20px"}}>Hate speech vs free speech</div>
              <div className="rating" style={{display:"flex"}}>
                <div className="like" style={{display:"flex"}}>
                  <img style={{width:"14.86px", height:"13px",marginRight:"3.14px"}} src={like} alt=""/>
                  <span style={{marginRight:"23px"}}>50</span>
                </div>
                <div className="dislike" style={{display:"flex"}}>
                  <img style={{width:"14.86px", height:"13px",marginRight:"3.14px"}} src={dislike} alt=""/>
                  <span style={{marginRight:"23px"}}>50</span>
                </div>
              </div>
              <div className="source" style={{justifyContent:"space-between",display:"flex",marginTop:"11px"}}>
                <div style={{borderRadius:"5px",backgroundColor:"rgba(80, 62, 157, 0.1)", height:"24px", width:"72px",fontSize:"11px",paddingTop:"7px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}><span style={{paddingTop:"10px"}}>ABC NEWS</span></div>
                <div style={{display:"flex"}}>
                  <img style={{height:"13.71px", width:"13.71px"}} src={clock} alt=""/>
                  <span>2:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{height:"96px",backgroundColor:"#F2F2F2"}}>
          <div style={{display:"flex"}}>
            <img style={{display:"block",height:"96px", width:"96px",borderRadius:"10px"}} src={Fox} alt=""/>
            <div style={{width:"216px",height:"90px",marginLeft:"24px"}}>
              <div className="title" style={{marginLeft:"-23px",marginBottom:"20px"}}>Hate speech vs free speech</div>
              <div className="rating" style={{display:"flex"}}>
                <div className="like" style={{display:"flex"}}>
                  <img style={{width:"14.86px", height:"13px",marginRight:"3.14px"}} src={like} alt=""/>
                  <span style={{marginRight:"23px"}}>50</span>
                </div>
                <div className="dislike" style={{display:"flex"}}>
                  <img style={{width:"14.86px", height:"13px",marginRight:"3.14px"}} src={dislike} alt=""/>
                  <span style={{marginRight:"23px"}}>50</span>
                </div>
              </div>
              <div className="source" style={{justifyContent:"space-between",display:"flex",marginTop:"11px"}}>
                <div style={{borderRadius:"5px",backgroundColor:"rgba(80, 62, 157, 0.1)", height:"24px", width:"72px",fontSize:"11px",paddingTop:"7px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}><span style={{paddingTop:"10px"}}>ABC NEWS</span></div>
                <div style={{display:"flex"}}>
                  <img style={{height:"13.71px", width:"13.71px"}} src={clock} alt=""/>
                  <span>2:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};