// import "./styles.css";
import Sviper from "../slider";
import SviperToday from "../todaySlider";
import SviperFeatured from "../featuredSlider";
export default function HomePage (){
  return (
    <div>
      <div>
        <div>
          <div className="homePage" style={{marginBottom:"32px", fontWeight:"bold", letterSpacing:"1px"}}>
            Explore Channels
          </div>
          <Sviper></Sviper>
        </div>
        <div>
          <div>
            <div className="homePage" style={{marginBottom:"32px", fontWeight:"bold", letterSpacing:"1px",marginTop:"48px"}}>
              Today’s Headlines
            </div>
            <SviperToday  style={{height:"244px", width:"1072px"}}></SviperToday>
            <SviperToday  style={{height:"244px", width:"1072px"}}></SviperToday>

          </div>
        </div>
        <div>
          <div>
            <div className="homePage" style={{marginBottom:"32px", fontWeight:"bold", letterSpacing:"1px",marginTop:"48px"}}>
              Featured News
            </div>
            <SviperFeatured></SviperFeatured>
          </div>
        </div>
      </div>
    </div>
  );
}