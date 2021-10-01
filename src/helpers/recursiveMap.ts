import React, { ReactElement } from "react"

const recursiveMap = (
  children: ReactElement[] | ReactElement,
  functionProps: object,
  fn: (child: ReactElement, functionProps: object) => ReactElement
): ReactElement[] => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child
    }

    if ((child as ReactElement).props.children) {
      const props = {
        children: recursiveMap(
          (child as ReactElement).props.children,
          functionProps,
          fn
        ),
      }
      child = React.cloneElement(child, props)
    }

    return fn(child, functionProps)
  })
}

export default recursiveMap
