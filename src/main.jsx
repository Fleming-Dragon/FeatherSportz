import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Section1 from './Section1.jsx'
import Section2 from './Section2.jsx'
import Section3 from './Section3.jsx'
import App from './App.jsx'
import Cards from './Cards.jsx'
import EmblaCarousel from './carausal.jsx'
import Footer from './Footer.jsx'
import CardsRow from './CardsRow.jsx'



const OPTIONS = { slidesToScroll: 'auto' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Page = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />

  </>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Section1 />
    <Section2 />
    <Section3 />
    <br />
    <Page />

    <br />
    <br />
    <CardsRow />

    <br />

    <App />
    <Cards />
    <br />
    <Footer />
  </StrictMode>
)
