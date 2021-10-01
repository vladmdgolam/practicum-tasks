import { motion } from "framer-motion"
import Fourth from "../steps/4"
import Fifth from "../steps/5"

const steps = [Fourth]

const AnimatedSteps = ({ index = 0 }) => {
  return (
    <motion.svg width={700} height={248} fill="none">
      {steps.map((Step, i) => (
        <Step key={i} visible={i === index} />
      ))}
    </motion.svg>
  )
}

export default AnimatedSteps
