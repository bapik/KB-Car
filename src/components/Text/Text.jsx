import cx from 'classnames'
import styles from './Text.module.sass'

export const Text = ({ color, weight, as, className, children }) => {
  const Element = as
  const classNames = cx(
    styles.text,
    `font-${color}`,
    `font-${weight}`,
    className
  )

  return (
    <Element className={classNames}>
      {children}
    </Element>
  )
}

Text.defaultProps = {
  as: 'p',
  color: 'black',
  weight: 'normal'
}
