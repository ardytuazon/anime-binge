import styles from '../../styles/Home.module.scss'
import Button from './Button';
import Navigations from '../Navigations';
import { AiFillStar, AiFillCaretRight, AiFillHeart } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

export default function CarouselItem({data}) {
  const fadeToRightAnimation ={
    offScreen: {opacity: 0, x: -100},
    onScreen: {
      opacity: 1,
      x: 0,
      viewport: {once:false, amount:0.3},
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <div className={styles.slideritem}>
        <img src={data.image} alt={`${data.anime_name} Image`} />
        <div className={styles.carousel}>
          <motion.h1 
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={fadeToRightAnimation}
            transition={{duration:0.5, delay: 0.3}}
            className={styles.title}>
              {data.anime_name}
          </motion.h1>
          <div
            className={styles.subheader}>
            <motion.div
              initial={"offScreen"}
              whileInView={"onScreen"}
              variants={fadeToRightAnimation}
              transition={{duration:0.5, delay: 0.5}}
              className={styles.rating}>
              <div className={styles.rate}>
                <AiFillStar className={styles.icon} size={20} />
                <span>{data.rating}</span>
              </div>
              <div className={styles.category}>
                <p>Category: {data.category.join(', ')}</p>
              </div>
            </motion.div>
            <motion.p
              initial={"offScreen"}
              whileInView={"onScreen"}
              variants={fadeToRightAnimation}
              transition={{duration:0.6, delay: 0.6}}
            >
              {data.description}
            </motion.p>
            <div className={styles.links}>
              <Button delay="0.7" className="main mr">
                <AiFillCaretRight size={20} />
                Watch Now!
              </Button>
              <Button delay="0.5" className="second fixed">
                <AiFillHeart size={20} />
              </Button>
            </div>
          </div>
          <Navigations />
        </div>
      </div>
    </AnimatePresence>
  )
}