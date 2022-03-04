import { useState, useEffect } from 'react'
import cx from 'classnames'
import Logo from '../Logo'
import Nav from '../Nav'
import Container from '../Container'
import styles from './Header.module.sass'

const Burger = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <span />
    <span />
    <span />
  </div>
)

export const Header = () => {
  const [navState, setNavState] = useState(false)
  const [scrollPosition, setScrollPosition] = useState()
  const classNames = cx(styles.header, { [styles.isScrolled]: scrollPosition > 10 })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  const handleClick = () => setNavState(!navState)

  return (
    <header className={classNames}>
      <Container className={styles.container}>
        <Logo />
        <Burger onClick={() => setNavState(!navState)} className={styles.burger} />
        <Nav isOpened={navState} onClick={handleClick} />
      </Container>
    </header>
  )
}
