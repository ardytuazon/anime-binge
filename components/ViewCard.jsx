import styles from '../styles/Home.module.scss'
import { AiFillStar } from "react-icons/ai";
// import Image from "next/image";

export default function ViewCard({data}) {
  return (
    <div className={styles.viewinfo}>
      <div className={styles.viewcard}>
        {/* <Image
          src={AnimeImage}
          alt="Login Image"
          objectFit="contain"
        /> */}
        <div className={styles.image}>
          <img src={data.image} alt={data.anime_name} />
        </div>
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
      <p>
        {data.description}
      </p>
    </div>
  )
}