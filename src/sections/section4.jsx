import Icons from "../icons";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const SectionFour = () => {
    const SpecialFoods = [
        {
            icon: <Icons.BagelIcon className='food' />,
            name: "Bagel",
        },
        {
            icon: <Icons.BurgerIcon className='food' />,
            name: "Burger",
        },
        {
            icon: <Icons.ChickenIcon className='food' />,
            name: "Chicken",
        },
        {
            icon: <Icons.FishIcon className='food' />,
            name: "Fish",
        },
        {
            icon: <Icons.ChipsIcon className='food' />,
            name: "FishChips",
        },
        {
            icon: <Icons.SaladIcon className='food' />,
            name: "Salads",
        },
        {
            icon: <Icons.PizzaIcon className='food' />,
            name: "Pizza",
        },
        {
            icon: <Icons.PastaIcon className='food' />,
            name: "Pasta",
        },
    ];
    return (
        <div className='section4-main container'>
            <div className='second-div'>
                <h2>Specialities</h2>
                <button className='show-btn'>show all</button>
            </div>
            <Swiper
                pagination={{
                    type: "fraction",
                    className: "pagination",
                }}
                navigation={true}
                breakpoints={{
                    320: { slidesPerView: 3 },
                    768: { slidesPerView: 6 },
                }}
                modules={[Pagination, Navigation]}
                className='mySwiper'
                slidesPerView={8}
            >
                {SpecialFoods.map((foodicon) => {
                    return (
                        <SwiperSlide>
                            <div className='card'>
                                <div>{foodicon.icon}</div>
                                <p className='name'>{foodicon.name}</p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
export default SectionFour;
