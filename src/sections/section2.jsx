import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const SectionTwo = () => {
    return (
        <div className='container'>
            <div className='second-div'>
                <h2>Restaurants</h2>
                <button className='show-btn'>show all</button>
            </div>

            <Swiper
                watchSlidesProgress={true}
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={4}
                breakpoints={{
                    370: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    1400: { slidesPerView: 4 },
                }}
                className='myySwiper'
            >
                <SwiperSlide className='slide'>
                    <img src={"llll.png"} alt='img' />
                    <img className='slide_img2' src={"Union.png"} alt='img' />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={"Photo-base.png"} alt='img' />
                    <img className='slide_img2' src={"Union.png"} alt='img' />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={"jjjj.png"} alt='img' />
                    <img className='slide_img2' src={"Union.png"} alt='img' />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={"bbbbb.png"} alt='img' />
                    <img className='slide_img2' src={"Union.png"} alt='img' />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={"bbbbb.png"} alt='img' />
                    <img className='slide_img2' src={"Union.png"} alt='img' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default SectionTwo;
