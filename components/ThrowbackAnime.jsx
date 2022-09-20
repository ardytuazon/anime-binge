import styles from '../styles/Home.module.scss'
import SecondCard from './common/SecondCard'
import { AnimeList } from '../data/anime'
import React, { useState, useEffect } from 'react'

export default function ThrowbackAnime() {
  const [anime, setAnime] = useState(AnimeList);

  useEffect(() => {
    setAnime === AnimeList;
  }, [])
  return (
    <div className={styles.throwback}>
      <h3 className={styles.subheader}>Throwback Anime!</h3>
      <div className={styles.cardlistthrowback}>
        {anime && anime.map(item => (
          <SecondCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}
