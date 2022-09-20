import { motion, AnimatePresence } from "framer-motion";

export default function Link({children, delay=0.3, className, ...props}) {
    const fadeToTopAnimation ={
    offScreen: {opacity: 0, y:10},
    onScreen: {
      opacity: 1,
      y: 0,
      viewport: {once:false, amount:0.3},
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.a
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToTopAnimation}
        transition={{duration:0.5, delay: delay}}
        href="#"
        className={`${className} small-text`}
        {...props}
        >
        {children}
      </motion.a>
    </AnimatePresence>
  )
}