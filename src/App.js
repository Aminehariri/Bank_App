import './index.css'
import styles from '../src/style'
import {Hero, Navbar ,Stats,Billing,CardDeal,Testimonials,CTA,Clients,Footer, Bussness} from './components'

function App() {
  return (
    <div className="bg-[#00040f] w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>

        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Bussness />
          <Billing />
          <CardDeal />
          <Clients />
          <CTA />
          <Footer />      
        </div>
      </div>


    </div>
  );
}

export default App;
