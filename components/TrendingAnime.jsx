import styles from '../styles/Home.module.scss'
import Card from './common/Card'
import { AnimeTrending } from '../data/anime'
import React, { useState, useEffect } from 'react'
import ViewCard from './ViewCard';
import EpisodeList from './EpisodeList';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function TrendingAnime() {
  const [anime, setAnime] = useState(AnimeTrending);

  const [active, setActive] = useState(null)

  console.log(active, "active")
  const toggleActive = (index) => {
    setActive(anime[index])
  }
  useEffect(() => {
    setAnime === AnimeTrending;
  }, [])
  return (
    <div className={styles.trending}>
      <h3 className={styles.subheader} onClick={() => toggleActive(null)}>Trending <span className={styles.fontdesign}>this week</span></h3>
      <div className={styles.cardlist}>
        {active &&
          <>
          <ViewCard data={active} />
          <EpisodeList data={active.episodes} />
          </>
        }
        <Swiper
            slidesPerView={3}
            loop="true"
            spaceBetween={30}
          >
        {!active && anime.map((item,index) => (
          // <a key={item.id} onClick={() => toggleActive(index)}>
          //   <Card data={item} />
          // </a>
            <SwiperSlide key={item.id} onClick={() => toggleActive(index)}><Card data={item} /></SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  )
}
