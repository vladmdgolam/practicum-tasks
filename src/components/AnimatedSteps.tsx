import { motion } from "framer-motion"
import Fourth from "../steps/4"
import Fifth from "../steps/5"

const steps = [Fourth, Fifth]

const AnimatedSteps = ({ index = 0 }) => {
  return (
    <motion.svg width={700} height={248} fill="none">
      {steps.map((Step, i) => (
        // тут можно принимать коллбек от "шага", что анимации закончились
        // и не рендерить невидимые шаги
        <Step key={i} visible={i === index} />
      ))}
    </motion.svg>
  )
}

export default AnimatedSteps
