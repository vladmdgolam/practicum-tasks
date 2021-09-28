type Props = {
  reset: () => void
  next: () => void
  prev: () => void
  index: number
  length: number
}

const ButtonWithPagination = ({ reset, next, prev, ...props }: Props) => {
  return (
    <div className="pagination">
      <Pagination {...props} />
      <NavigationButtons {...{ reset, next, prev, ...props }} />
    </div>
  )
}

const Pagination = ({ index = 0, length = 0 }) => (
  <div>{`${index + 1} из ${length}`}</div>
)

const NavigationButtons = ({
  reset,
  next,
  prev,
  index = 0,
  length = 0,
}: Props) => {
  return (
    <menu>
      {index > 0 && <button onClick={prev}>←</button>}
      {index < length - 1 && <button onClick={next}>Далее</button>}
      {index === length - 1 && <button onClick={reset}>заново</button>}
    </menu>
  )
}

export default ButtonWithPagination
