import { AnimatePresence } from "framer-motion"
import { ReactElement, JSXElementConstructor, cloneElement } from "react"
import { defaultAnimations } from "../constants"
import recursiveMap from "../helpers/recursiveMap"

interface AuxProps {
  children: ReactElement[] | ReactElement
  animations: { [index: string]: any }
  visible: boolean
}

// теоретически здесь можно превращать элемент в motion.элемент
const animateElement = (
  child: ReactElement<any, string | JSXElementConstructor<any>>,
  // functionProps: fProps
  props: { [index: string]: any }
) => {
  const { animations, visible } = props
  const { id } = child.props

  // если id есть в массиве анимаций
  // применить анимации
  if (animations[id] && Object.keys(animations[id]).length !== 0) {
    return (
      <AnimatePresence>
        {visible &&
          cloneElement(child, {
            ...defaultAnimations,
            ...animations[id],
          })}
      </AnimatePresence>
    )
  }
  return child
}

const AnimatedStep = ({ visible, children, animations }: AuxProps) => {
  return <>{recursiveMap(children, { animations, visible }, animateElement)}</>
}

export default AnimatedStep
