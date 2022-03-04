import Container from '../../components/Container'
import Section from '../../components/Section'
import useFetch from '../../utils/useFetch'
import styles from './Politics.module.sass'

export const Politics = () => {
  const data = useFetch('https://panel.kb-car.pl/wp-json/wp/v2/pages?slug=polityka-prywatnosci')

  if (!data) return null

  return (
    <main>
      <Section>
        <Container>
          <div className={styles.policy} dangerouslySetInnerHTML={{ __html: data[0].content.rendered }} />
        </Container>
      </Section>
    </main>
  )
}
