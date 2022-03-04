import Container from '../Container'
import Section from '../Section'
import Text from '../Text'
import Title from '../Title'
import styles from './Steps.module.sass'

export const Steps = ({ steps }) => (
  <Section>
    <Container className={styles.grid}>
      <Title size='2'>Etapy konserwacji</Title>
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <figure className={styles.circle}>
            <span className={styles.number}>{index + 1}</span>
          </figure>
          <Text className={styles.text}>{step.step}</Text>
        </div>
      ))}
    </Container>
  </Section>
)
