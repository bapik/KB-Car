import cx from 'classnames'
import { icons } from './icons'
import styles from './Icon.module.sass'

export const Icon = ({ name, className }) => {
  const classNames = cx(styles.icon, className)

  return <img src={icons[name]} alt={name} className={classNames} />
}