import styles from '../styles/Home.module.scss'
import EpisodeCard from './common/EpisodeCard'

export default function EpisodeList({data}) {
  return (
    <div className={styles.episode}>
      <div className={styles.header}>
        <h5 className={styles.cardtitle}>Episodes</h5>
        <h5 className={styles.cardtitle}>Season 1</h5>
      </div>
       {data && data.map(item => (
          <EpisodeCard key={item.id} data={item} />
        ))}
      
    </div>
  )
}