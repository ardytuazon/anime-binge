import styles from '../../styles/Home.module.scss'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function EpisodeCard({data}) {
  const delay = `0.${data.id}`
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

  const fadeToLeftAnimation ={
    offScreen: {opacity: 0, x: 100},
    onScreen: {
      opacity: 1,
      x: 0,
      viewport: {once:false, amount:0.3},
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay:delay}}
        className={styles.episodecard}>
        <div className={styles.episodeimg}>
          <img src={data.image[currentIndex]} alt={data.title} />
        </div>
        <div className={styles.details}>
          <h6 className={styles.episodetitle}>{data.title}</h6>
          <p>
            {data.description}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}