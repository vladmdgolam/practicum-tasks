import { ReactElement, JSXElementConstructor, cloneElement } from "react"
import { defaultAnimations, states } from "../constants"
import recursiveMap from "../helpers/recursiveMap"

interface AuxProps {
  children: ReactElement[] | ReactElement
  // index: number
  animations: { [index: string]: any }
}

// теоретически здесь можно превращать элемент в motion.элемент
const animateElement = (
  child: ReactElement<any, string | JSXElementConstructor<any>>,
  // functionProps: fProps
  animations: { [index: string]: any }
) => {
  // если id есть в массиве анимаций
  // применить анимации
  const { id } = child.props
  if (animations[id] && Object.keys(animations[id]).length !== 0) {
    return cloneElement(child, {
      ...animations[id],
    })
  } 
  // else {
  //   return cloneElement(child, {
  //     ...defaultAnimations,
  //   })
  // }
  return child
}

const AnimatedStep = ({ children, animations }: AuxProps) => {
  return <>{recursiveMap(children, animations, animateElement)}</>
}

export default AnimatedStep
