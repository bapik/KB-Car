import { Link } from 'react-router-dom'
import cx from 'classnames'
import data from './data.json'
import styles from './Nav.module.sass'

const NavLink = ({ url, label, button }) => {
  const className = cx(styles.listItem, button && styles.button)

  return (
    <li className={className}>
      <Link to={url} className={styles.link}>{label}</Link>
    </li>
  )
}

export const Nav = ({ isOpened, onClick }) => {
  const classNames = cx(styles.nav, { [styles.isOpened]: isOpened })

  return (
    <nav className={classNames} onClick={onClick}>
      <ul className={styles.list}>
        {data.map((item, key) => <NavLink url={`/${item.url}`} label={item.label} button={item.button} key={key} />)}
      </ul>
    </nav>
  )
}
