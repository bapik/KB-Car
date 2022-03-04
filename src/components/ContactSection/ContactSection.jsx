import ButtonLink from '../ButtonLink'
import Text from '../Text'
import Title from '../Title'
import Icon from '../Icon'
import Section from '../Section'
import Container from '../Container'
import styles from './ContactSection.module.sass'

const Option = ({ icon, children }) => (
  <div className={styles.option}>
    <Icon name={icon} className={styles.icon} />
    {children}
  </div>
)

export const ContactSection = () => (
  <Section className={styles.section}>
    <Container background='light-blue' className={styles.container}>
      <Title className={styles.title}>Nie czekaj do przyszłej zimy. Mamy wolne terminy</Title>
      <div className={styles.row}>
        <ButtonLink label='zarezerwuj termin' url='/rezerwacje' className={styles.button} />
      </div>
      <div className={styles.options}>
        <Option icon='telephone'>
          <a href='tel:+48881634174' className={`${styles.text} text`}>+48 881 634 174</a>
        </Option>
        <Option icon='email'>
          <a href='mailto:kamil.bien.96@wp.pl' className={`${styles.text} text`}>kamil.bien.96@wp.pl</a>
        </Option>
        <Option icon='place'>
          <Text weight='bold' className={`${styles.text} text`}>Wola Wielka 102</Text>
        </Option>
      </div>
    </Container>
  </Section>
)
