import Container from '../Container'
import Section from '../Section'
import Text from '../Text'
import Title from '../Title'
import styles from './PriceList.module.sass'

const Column = ({ children }) => (
  <div className={styles.column}>
    <Text className={styles.text}>{children}</Text>
  </div>
)

export const PriceList = ({ prices }) => {
  return (
    <Section>
      <Container>
        <Title size='2' className='text-center'>Cennik usług</Title>
        {prices.map((type, key) => (
          <ul className={styles.list} key={key}>
            <Title headingLevel='h3' className={styles.title}>{type.title}</Title>
            {type.list.map((item, key) => (
              <li className={styles.row} key={key}>
                <Column>{item.work}</Column>
                <Column>{item.price} zł</Column>               
              </li>
            ))}
          </ul>
        ))}
      </Container>
    </Section>
  )
}