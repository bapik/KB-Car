import Title from '../Title'
import Section from '../Section'
import Wrapper from '../Wrapper'
import Container from '../Container'
import Icon from '../Icon'
import Text from '../Text'
import data from './data.json'
import styles from './Advantages.module.sass'

export const Advantages = () => (
  <Section>
    <Wrapper />
    <Container>
      <Title size='2'>Zaufaj naszemu doświadczeniu.</Title>
      <div className={styles.grid}>
        {data.map((advantage, key) => (
          <div className={styles.card} key={key}>
            <div className={styles.body}>
              <Icon name={advantage.image} className={styles.icon} />
              <Title headingLevel='h3' className={styles.title}>{advantage.title}</Title>
              <Text className={styles.text}>{advantage.text}</Text>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </Section>
)
