import CalendarComponent from '../../components/CalendarComponent'
import Container from '../../components/Container'
import Section from '../../components/Section'
import Text from '../../components/Text'
import Title from '../../components/Title'
import data from './data.json'
import styles from './Reservation.module.sass'

const Wrapper = ({ children }) => <div className={styles.wrapper}>{children}</div>

export const Reservation = () => {
  return (
    <main>
      <Section className={styles.section}>
        <Container className={styles.container}>
          <div className={styles.columnLeft}>
            <Wrapper>
              <Title headingLevel='h1' size='1'>{data.title}</Title>
              <Text>{data.text}</Text>
            </Wrapper>
          </div>
          <div className={styles.columnRight}>
            <Wrapper>
              <CalendarComponent />
            </Wrapper>
          </div>
        </Container>
      </Section>
    </main>
  )
}
