import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SectionTwo = () => {
    return (
        <div className='container'>
            <div className='second-div'>
                <h2>Restaurants</h2>
                <button className='show-btn'>show all</button>
            </div>

            <Swiper
                watchSlidesProgress={true}
                slidesPerView={4}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                }}
                className='myySwiper'
            >
                <SwiperSlide className='slide'>
                    <img src='llll.png' alt='img' />
                    <img src='Group 29.png' alt='img' />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src='Photo-base.png' alt='img' />
                    <img src='vvvv.png' alt='img' />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src='jjjj.png' alt='img' />
                    <img src='Union.png' alt='img' />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src='bbbbb.png' alt='img' />
                    <img src='nnnn.png' alt='img' />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src='llll.png' alt='img' />
                    <img src='Group 29.png' alt='img' />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src='Photo-base.png' alt='img' />
                    <img src='vvvv.png' alt='img' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default SectionTwo;
