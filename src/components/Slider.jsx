import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider from "../assets/slider.jpg";
import slider1 from "../assets/newslider.jpeg";
import slider2 from "../assets/nwwslider.jpg";



const images = [
    { src: slider, alt: "Slider Image 1" },
    { src: slider1, alt: "Slider Image 2" },
    { src: slider2, alt: "Slider Image 3" },
];
const Slider = () => {
    return (
      <div className="w-screen"> {/* Full width */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="w-screen h-[400px]" // Adjust height if needed
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-screen h-[400px]"> {/* Ensures full width */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Slider;
  
