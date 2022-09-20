import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { AnimeCarousel } from '../data/anime';
import "swiper/css/pagination";
import 'swiper/css';
import CarouselItem from './common/CarouselItem';

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={true}
      pagination={{
          clickable: true,
        }}
      modules={[Pagination]}
    >
      {AnimeCarousel && AnimeCarousel.map(item => (
          <SwiperSlide key={item.id}>
            <CarouselItem data={item} />
          </SwiperSlide>
      ))}
    </Swiper>
  )
}
