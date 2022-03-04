import { Link } from 'react-router-dom'
import cx from 'classnames'
import Icon from '../Icon'
import styles from './ButtonLink.module.sass'

export const ButtonLink = ({ url, label, className }) => {
  const classNames = cx(styles.button, className)

  return (
    <div className={classNames}>
      <figure className={styles.circle} />
      <Link to={url} className={styles.label + ' text'}>
        {label} <Icon name='arrow' className={styles.icon} />
      </Link>
    </div>
  )
}
