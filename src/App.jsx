import { useEffect, useState } from 'react'
import { Banner } from './Components/Banner/Banner'
import { Categories } from './Components/Categories/Categories'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Info } from './Components/Info/Info'
import { Offert } from './Components/Offert/Offert'
import { PopularBrands } from './Components/PopularBrands/PopularBrands'
import { Products } from './Components/Products/Products'
import { Services } from './Components/Services/Services'
function App() {
  const [scrollY, setScrollY] = useState(false)
  useEffect(() => {
    if (window.scrollY > 100) {
      setScrollY(true)
    } else {
      setScrollY(false)
    }
  }, [window.scrollY])
  return (
    <>
      <Header scrollY={scrollY} />
      <main>
        <article>
          <Banner />
          <Categories />
          <Offert />
          <Products />
          <Services />
          <Info />
          <PopularBrands />
        </article>

      </main>
      <Footer />
      <a href="#top" class={`back-top-btn ${scrollY && 'active'}`} aria-label="back to top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    </>
  )
}

export default App
