import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.jpg";
import Ecommerce from "../../img/photo_2023-03-06_18-57-23.jpg";
import HOC from "../../img/photo_2023-10-09_11-48-21.jpg";
import MusicApp from "../../img/engzon.jpg";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide> 
          <a href="https://engzoneuz.netlify.app/"><img src={Sidebar} alt="" />  </a>       
        </SwiperSlide>
        <SwiperSlide>
			<a href="https://konsta.netlify.app/"><img src={Ecommerce} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
			<a href="https://arzon-mb-mobiuz-uzmobile.netlify.app"><img src={MusicApp} alt="" /></a>        
        </SwiperSlide>
        <SwiperSlide>
		<a href="https://somonyoli.netlify.app"><img src={HOC} alt="" /></a>         
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
