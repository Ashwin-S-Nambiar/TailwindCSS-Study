import {     
  Hero,
  Footer,
  CustomerReviews,
  Services,
  Subscribe,
  SpecialOffer,
  SuperQuality,
  PopularProducts
} from './sections/index'
import Nav from "./components/Nav"


const App = () => (
  <main className="relative">
      <Nav />
    <section className="x1:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section> 
    <section className="padding">
      <SuperQuality />
    </section> 
    <section className="py-10 padding-x<">
      <Services />
    </section> 
    <section className="padding">
      <SpecialOffer />
    </section> 
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section> 
    <section className="w-full py-16 padding-x sm:py-32">
      <Subscribe />
    </section> 
    <section className="pb-8 bg-black padding-x padding-t">
      <Footer />
    </section> 
  </main> 
)

export default App