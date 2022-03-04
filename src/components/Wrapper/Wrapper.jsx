import cx from 'classnames'
import styles from './Wrapper.module.sass'

export const Wrapper = ({ side, bgColor, className, children }) => {
  const classNames = cx(
    styles.wrapper,
    styles[`${side}`],
    `bg-${bgColor}`,
    className
  )

  return <div className={classNames}>{children}</div>
}

Wrapper.defaultProps = {
  side: 'left',
  bgColor: 'light-grey'
}