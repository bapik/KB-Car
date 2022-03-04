import Title from '../Title'
import Text from '../Text'
import Section from '../Section'
import Wrapper from '../Wrapper'
import Container from '../Container'
import background from './../../assets/background.jpg'
import styles from './Main.module.sass'

export const Main = ({ title, text, button }) => (
  <Section className={styles.section}>
    <Wrapper className={styles.wrapper}>
      <img src={background} alt='tło' className={styles.image} />
    </Wrapper>
    <Container className={styles.container}>
      <Title headlingLevel='h1' size='0' className={`main-title ${styles.title}`}>{title}</Title>
      <Text className={styles.text}>{text}</Text>
      {button}
    </Container>
  </Section> 
)
