import { useEffect, useRef, useState } from 'react'
import './App.css'
import AccessibilityForm from './components/accessibility-form/AccessibilityForm'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Service from './components/service/Service'
import SuccessCases from './components/success-cases/SuccessCases'
import Tour from './components/tour/Tour'
import Toaster from './components/toaster/Toaster'
import post from './lib/email'

type DivSelector = HTMLElement | null

function App() {
  const [toaster, setToaster] = useState<boolean>(false);
  const heroRef = useRef<DivSelector>(null);
  const landingPageRef = useRef<DivSelector>(null);
  
  useEffect(() => {
    const hero = heroRef.current!
    const main = landingPageRef.current!
    const setHeroSize = () => main.style.setProperty('--heights-hero', `${hero.offsetHeight}px`)
    
    setHeroSize()
    window.onresize = setHeroSize
  }, [])

  return (
    <>
      <Header />
      <main className='landing-page' ref={landingPageRef}>
        <Hero ref_={heroRef} />
        <Service />
        <Tour />
        <SuccessCases />
        <AccessibilityForm send={(email: string) => {
          post(email)
          setToaster(true)
        }} />
        {toaster && <Toaster remove={() => setToaster(false) }/>}
      </main>
      <Footer />
    </>
  )
}

export default App
