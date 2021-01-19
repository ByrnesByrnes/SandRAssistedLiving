import './dist/css/style.css'
import { 
  Header,
  Hero,
  Services,
  About,
  Footer, 
  Contact,
} from './components'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
