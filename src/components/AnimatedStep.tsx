import { AnimatePresence } from "framer-motion"
import { ReactElement, JSXElementConstructor, cloneElement } from "react"
import { defaultAnimations, states } from "../constants"
import recursiveMap from "../helpers/recursiveMap"

interface AuxProps {
  children: ReactElement[] | ReactElement
  // index: number
  animations: { [index: string]: any }
  visible: boolean
}

// теоретически здесь можно превращать элемент в motion.элемент
const animateElement = (
  child: ReactElement<any, string | JSXElementConstructor<any>>,
  // functionProps: fProps
  props: { [index: string]: any }
) => {
  // если id есть в массиве анимаций
  // применить анимации
  const { animations, visible } = props
  const { id } = child.props
  if (animations[id] && Object.keys(animations[id]).length !== 0) {
    // если есть свойство exit, используем AnimatePresence
    // if (animations[id].hasOwnProperty("exit")) {
      return (
        <AnimatePresence>
          {visible &&
            cloneElement(child, {
              ...animations[id],
            })}
        </AnimatePresence>
      )
    // }
  }
  // else {
  //   return cloneElement(child, {
  //     ...defaultAnimations,
  //   })
  // }
  return child
}

const AnimatedStep = ({ visible, children, animations }: AuxProps) => {
  return <>{recursiveMap(children, { animations, visible }, animateElement)}</>
}

export default AnimatedStep
