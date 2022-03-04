import Container from '../../components/Container'
import Form from '../../components/Form'
import Section from '../../components/Section'
import Title from '../../components/Title'
import styles from './Contact.module.sass'

const Column = ({ children }) => <div className={styles.column}>{children}</div>

export const Contact = () => {
  return (
    <main>
      <Section className={styles.section}>
        <Container className={styles.container}>
          <Column>
            <div className={styles.wrapper}>
              <Title headingLevel='h1' size='2'>Masz pytania?</Title>
              <Form />
            </div>
          </Column>
          <Column>
            <div className={styles.mapWrapper}>
              <iframe
                title='mapa dojazdu'
                src='https://www.google.com/maps/d/u/0/embed?mid=14ud98vZRo_lJ1CyOaswz7cGp9Bg-FES6'
                loading='lazy'
                className={styles.map}
              />
            </div>
          </Column>
        </Container>
      </Section>
    </main>
  )
}
