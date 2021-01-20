import './dist/css/style.css'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { 
  Header,
  Footer, 
} from './components'
import {
  Home,
  Facility,
  Contact,
} from './pages'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.FACILITY}>
          <Facility />
        </Route>
        <Route path={ROUTES.CONTACT}>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
