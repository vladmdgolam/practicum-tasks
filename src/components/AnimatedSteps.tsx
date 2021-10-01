import { motion } from "framer-motion"
import Step from "../steps/5"

const AnimatedSteps = ({ index = 0 }) => {
  return (
    <motion.svg width={700} height={248} fill="none">
      <Step />
    </motion.svg>
  )
}

export default AnimatedSteps
