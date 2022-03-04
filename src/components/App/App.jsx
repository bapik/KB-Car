import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ContactSection from '../ContactSection'
import Header from '../Header'
import Home from '../../views/Home'
import Politics from '../../views/Politics'
import OfferType from '../../views/OfferType'
import Contact from '../../views/Contact'
import Reservation from '../../views/Reservation'
import Cookies from '../Cookies'
import Footer from '../Footer'
import ScrollToTop from '../../utils/ScrollToTop'

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={OfferType} path='/oferta' />
        <Route component={Contact} path='/kontakt' />
        <Route component={Reservation} path='/rezerwacje' />
        <Route component={Politics} path='/polityka-prywatnosci' />
        <Route path='*' />
      </Switch>
      <ContactSection />
      <Footer />
      <Cookies />
    </Router>
  )
}
