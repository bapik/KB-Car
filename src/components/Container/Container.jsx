import cx from 'classnames'
import styles from './Container.module.sass'

export const Container = ({ className, background, children }) => {
  const classNames = cx(styles.container, `bg-${background}`, className)

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}