import Text from '../Text'
import Title from '../Title'
import styles from './TwoColumn.module.sass'
import Section from '../Section'
import Container from '../Container'

const Column = ({ children }) => <div className={styles.column}>{children}</div>

export const TwoColumn = ({ title, text, button }) => {
  return (
    <Section>
      <Container className={styles.container}>
        <div className={styles.grid}>
          <Column>
            <Title size='3'>{title}</Title>
          </Column>
          <Column>
            <Text>{text}</Text>
            {button}
          </Column>
        </div>
      </Container>
    </Section>
  )
}
