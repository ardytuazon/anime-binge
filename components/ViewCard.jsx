import styles from '../styles/Home.module.scss'
import { AiFillStar } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

export default function ViewCard({data}) {
  const zoomAnimation ={
    offScreen: {opacity: 0.7, scale: 0.8},
    onScreen: {
      opacity: 1,
      scale: 1,
      viewport: {once:false, amount:0.3},
    },
  }
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
      <div className={styles.viewinfo}>
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          variants={zoomAnimation}
          transition={{duration:0.3}}
          className={styles.viewcard}>
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
        </motion.div>
        <motion.p
          initial={"offScreen"}
          whileInView={"onScreen"}
          variants={fadeToRightAnimation}
          transition={{duration:0.5, delay: 0.1}}
        >
          {data.description}
        </motion.p>
      </div>
    </AnimatePresence>
  )
}