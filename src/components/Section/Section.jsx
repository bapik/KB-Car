import cx from 'classnames'
import styles from './Section.module.sass'

export const Section = ({ className, children }) => {
  const classNames = cx(styles.section, className)
  
  return (
    <section className={classNames}>
      {children}
    </section>
  )
}
