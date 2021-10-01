import { useState } from "react"
import AnimatedSteps from "./AnimatedSteps"
import ButtonWithPagination from "./ButtonWithPagination"

const length = 2

const Slide = () => {
  const [index, setStepIndex] = useState(0)
  const reset = () => setStepIndex(0)
  const next = () => setStepIndex(index + 1)
  const prev = () => setStepIndex(index - 1)
  return (
    <div className="slide">
      <AnimatedSteps index={index} />
      <ButtonWithPagination
        index={index}
        length={length}
        {...{ reset, next, prev }}
      />
    </div>
  )
}

export default Slide
