import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Team, ContactUs } from "./components";
import SecurityMech from "./components/securityMechanism";
// yt video and  chose video ko dekh kr update kro
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        {/* <SecurityMech /> */}

        <Team />
        <CardDeal />
        <Testimonials />
        <CTA />

        <ContactUs />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;