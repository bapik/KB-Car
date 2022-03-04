import { Link } from 'react-router-dom'
import { ReactComponent as Image } from '../../assets/logo.svg'
import styles from './Logo.module.sass'

export const Logo = () => (
  <Link to='/'>
    <Image className={styles.logo} />
  </Link>
)