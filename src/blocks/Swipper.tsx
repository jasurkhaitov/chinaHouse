import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../main.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { images } from '../assets/images';

export default function Swipper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='rounded-[15px]' src={images.banner} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-[15px]' src={images.banner} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-[15px]' src={images.banner} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}