import { Link } from 'react-router-dom'
import Text from '../Text'
import Container from '../Container'
import styles from './Footer.module.sass'

export const ListItem = ({ url, children }) => (
  <li className={styles.navItem}>
    <Link className={styles.link} to={url}>
      {children}
    </Link>
  </li>
)

const Dot = () => <figure className={styles.dot} />

export const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.container}>
      <Text weight='bold' className={styles.text}>&#169; 2021 KB-Car</Text>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <ListItem url='/kontakt'>Kontakt</ListItem>
          <Dot />
          <ListItem url='/rezerwacje'>Rezerwuj termin</ListItem>
          <Dot />
          <ListItem url='/oferta'>Oferta</ListItem>
          <Dot />
          <ListItem url='/polityka-prywatnosci'>Polityka Prywatności</ListItem>
        </ul>
      </nav>
      <Text weight='bold' className={styles.text}>B.Spyrka</Text>
    </Container>
  </footer>
)
