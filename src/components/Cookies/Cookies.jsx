import { Link } from 'react-router-dom'
import CookieConsent from 'react-cookie-consent'
import styles from './Cookies.module.sass'

export const Cookies = () => (
  <CookieConsent
    location='bottom'
    buttonText='Akceptuję'
    cookieName='Cookie'
    containerClasses={styles.cookie}
    buttonClasses={styles.button}
    expires={150}
  >
    Ta strona używa plików Cookie. Więcej przeczytasz w{' '}
    <Link to='/polityka-prywatnosci'>Polityce prywatności</Link>.
  </CookieConsent>
)