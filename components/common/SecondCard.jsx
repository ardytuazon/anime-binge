import styles from '../../styles/Home.module.scss'
import { motion, AnimatePresence } from "framer-motion";

export default function Card({data}) {

  const delay = `0.${data.id}`

  const fadeToTopAnimation ={
    offScreen: {opacity: 0, y: 20 },
    onScreen: {
      opacity: 1,
      y: 0,
      viewport: {once:false, amount:0.3},
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToTopAnimation}
        transition={{duration:0.5, delay:delay}}
        className={styles.secondcard}
      >
        <img src={data.image} alt={data.anime_name} />
      </motion.div>
    </AnimatePresence>
  )
}