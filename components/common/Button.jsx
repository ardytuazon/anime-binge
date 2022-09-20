import { motion, AnimatePresence } from "framer-motion";

export default function Button({children, delay=0.5, type='submit', className, ...props}) {
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
      <motion.button
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={zoomAnimation}
        transition={{duration:0.5, delay: delay}}
        type={type}
        className={`${className}`}
        {...props}
        >
          {children}
      </motion.button>
    </AnimatePresence>
  )
}