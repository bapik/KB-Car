import Main from '../../components/Main'
import Advantages from '../../components/Advantages'
import TwoColumn from '../../components/TwoColumn'
import ButtonLink from '../../components/ButtonLink'
import data from './data.json'

const Button = () => <ButtonLink url='/oferta' label='Zobacz ofertę' />

export const Home = () => {
  return (
    <main>
      <Main title={data.main.title} text={data.main.text} button={<Button />} />
      <TwoColumn title={data.column.title} text={data.column.text} button={<Button />} />
      <Advantages />
    </main>
  )
}
