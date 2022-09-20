import styles from '../../styles/Home.module.scss'
import { AiFillStar } from "react-icons/ai";
// import Image from "next/image";

export default function Card({data}) {
  return (
    <div className={styles.secondcard}>
      {/* <Image
        src={AnimeImage}
        alt="Login Image"
        objectFit="contain"
      /> */}
      <img src={data.image} alt={data.anime_name} />
    </div>
  )
}