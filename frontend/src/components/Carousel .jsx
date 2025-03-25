import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FiChevronDown } from "react-icons/fi";
import Button from "./Button";
import carousel1 from "../images/Carousel1.png";

const slides = [
  {
    id: 1,
    title: "CARROT",
    subtitle: "Puttupodi",
    image: carousel1,
  },
  {
    id: 2,
    title: "RAGI",
    subtitle: "Puttupodi",
    image: carousel1,
  },
  {
    id: 3,
    title: "WHEAT",
    subtitle: "Puttupodi",
    image: carousel1,
  },
];

const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true, el: ".swiper-pagination" }}
      className="w-full relative"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-[calc(100vh-80px)] md:h-screen flex items-center justify-center">
            {/* Image Section */}
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />

            {/* Overlay Text Section */}
            <div className="absolute left-10 top-[60%] md:top-[65%] transform -translate-y-1/2 text-left">
              <Button text="Discover More" width="200px" height="60px" />
            </div>

            {/* Pagination Dots - Positioned at Bottom Right */}
            <div className="swiper-pagination absolute bottom-4 right-6"></div>

            {/* Down Arrow with Circle */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-30 border border-white animate-bounce cursor-pointer">
              <FiChevronDown className="text-white text-2xl" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
