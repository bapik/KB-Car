import Advantages from '../../components/Advantages'
import Main from '../../components/Main'
import PriceList from '../../components/PriceList'
import Steps from '../../components/Steps'
import TwoColumn from '../../components/TwoColumn'
import useFetch from '../../utils/useFetch'

export const OfferType = () => {
  const data = useFetch('https://panel.kb-car.pl/wp-json/wp/v2/pages?slug=konserwacja-podwozia')

  if (!data) return null

  return (
    <main>
      <Main title={data[0].main_title} text={data[0].main_text} />
      <TwoColumn title={data[0].desc_title} text={data[0].desc_text} />
      <Steps steps={data[0].steps} />
      <Advantages />
      <PriceList prices={data[0].price_list} />
    </main>
  )
}
