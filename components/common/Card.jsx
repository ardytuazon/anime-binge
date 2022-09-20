import styles from '../../styles/Home.module.scss'
import { AiFillStar } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

export default function Card({data}) {
  const zoomAnimation ={
    offScreen: {opacity: 0, scale: 0.8},
    onScreen: {
      opacity: 1,
      scale: 1,
      viewport: {once:false, amount:0.3},
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div 
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={zoomAnimation}
        transition={{duration:0.3, delay: 0.1}}
        className={styles.card}>
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
      </motion.div>
    </AnimatePresence>
  )
}