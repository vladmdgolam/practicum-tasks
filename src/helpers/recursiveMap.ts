import React, { ReactElement } from "react"

const recursiveMap = (
  children: ReactElement[],
  fn: (child: ReactElement) => ReactElement
): ReactElement[] => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child
    }

    if ((child as ReactElement).props.children) {
      const props = {
        children: recursiveMap((child as ReactElement).props.children, fn),
      }
      child = React.cloneElement(child, props)
    }

    return fn(child)
  })
}

export default recursiveMap
