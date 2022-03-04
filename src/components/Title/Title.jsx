import cx from 'classnames'
import styles from './Title.module.sass'

export const Title = ({ headingLevel, size, color, weight, className, children, ...rest }) => {
  const Heading = headingLevel
  const classNames = cx(
    styles.title,
    styles[`size-${size}`],
    `font-${color}`,
    `font-${weight}`,
    className
  )

  return (
    <Heading className={classNames} {...rest}>
      {children}
    </Heading>
  )
}

Title.defaultProps = {
  headingLevel: 'h2',
  color: 'black',
  weight: 'bold'
}