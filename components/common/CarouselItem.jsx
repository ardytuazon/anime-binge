import styles from '../../styles/Home.module.scss'
import Button from './Button';
import Navigations from '../Navigations';
import { AiFillStar, AiFillCaretRight, AiFillHeart } from "react-icons/ai";

export default function CarouselItem({data}) {
  return (
    <div className={styles.slideritem}>
      <img src={data.image} alt={`${data.anime_name} Image`} />
      <div className={styles.carousel}>
        <h1 className={styles.title}>
          {data.anime_name}
        </h1>
        <div className={styles.subheader}>
          <div className={styles.rating}>
            <div className={styles.rate}>
              <AiFillStar className={styles.icon} size={20} />
              <span>{data.rating}</span>
            </div>
            <div className={styles.category}>
              <p>Category: {data.category.join(', ')}</p>
            </div>
          </div>
          <p>
            {data.description}
          </p>
          <div className={styles.links}>
            <Button className="main mr">
              <AiFillCaretRight size={20} />
              Watch Now!
            </Button>
            <Button className="second fixed">
              <AiFillHeart size={20} />
            </Button>
          </div>
        </div>
        <Navigations />
      </div>
    </div>
  )
}