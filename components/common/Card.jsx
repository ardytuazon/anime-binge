import styles from '../../styles/Home.module.scss'
import { AiFillStar } from "react-icons/ai";

export default function Card({data}) {

  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.anime_name} />
      <div className={styles.carddetails}>
        <h5 className={styles.cardtitle}>{data.anime_name}</h5>
        <div className={styles.rating}>
          <div className={styles.category}>
            <p>Category: {data.category.join(', ')}</p>
          </div>
          <div className={styles.rate}>
            <AiFillStar className={styles.icon} size={18} />
            <span>{data.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}