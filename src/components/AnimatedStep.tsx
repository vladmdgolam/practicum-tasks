import { ReactElement, JSXElementConstructor } from "react"
import recursiveMap from "../helpers/recursiveMap"

interface AuxProps {
  children: ReactElement[]
  index: number
}

const animateElement = (
  child: ReactElement<any, string | JSXElementConstructor<any>>
) => {
  console.log(child.props.id)
  return child
}

const AnimatedStep = ({ children, index = 0 }: AuxProps) => {
  return <>{children}</>
  // return <>{recursiveMap(children, animateElement)}</>
}

export default AnimatedStep
