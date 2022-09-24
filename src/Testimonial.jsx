import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from "./Card";
import Data from "./Sdata";

const Testimonial = () => {
    return (
        <>
            <section className="main-div d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10">
                            <div className="test mb-5 mx-5 d-flex justify-content-center">
                                <h1 className="text-center border-bottom border-white border-5 rounded-4">Testimonial</h1>
                            </div>
                            <Swiper
                                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1
                                    },
                                    500: {
                                        slidesPerView: 2,
                                        spaceBetween: 5
                                    },
                                    700: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    1000: {
                                        slidesPerView: 2,
                                        spaceBetween: 0
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 50
                                    },
                                    1300: {
                                        slidesPerView: 3,
                                        spaceBetween: 0
                                    },
                                }}
                                navigation
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true
                                }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                className="mySwiper"
                            >
                                {
                                    Data.map((value, index) => {
                                        return (
                                            <SwiperSlide>
                                                <Card id={value.id} avatar={value.avatar} name={value.name} position={value.position} company={value.company} testimonial={value.testimonial} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;