import styles from '../../styles/Home.module.scss'
import React, { useState, useEffect } from 'react';

export default function EpisodeCard({data}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const random = Math.floor(Math.random() * 2000) + 1500
  useEffect(() => {
    const intervalId = setInterval(() => {
      if(currentIndex === data.image.length - 1) {
        setCurrentIndex(0);
      } 
      else {
        setCurrentIndex(currentIndex + 1);
      }
    }, random )
    
    return () => clearInterval(intervalId);
  }, [currentIndex])
  return (
    <div className={styles.episodecard}>
      <div className={styles.episodeimg}>
        <img src={data.image[currentIndex]} alt={data.title} />
      </div>
      <div className={styles.details}>
        <h6 className={styles.episodetitle}>{data.title}</h6>
        <p>
          {data.description}
        </p>
      </div>
    </div>
  )
}