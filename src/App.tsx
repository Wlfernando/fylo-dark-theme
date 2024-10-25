import './App.css'
import AccessibilityForm from './components/accessibility-form/AccessibilityForm'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Service from './components/service/Service'
import SuccessCases from './components/success-cases/SuccessCases'
import Tour from './components/tour/Tour'

function App() {
  return (
    <>
      <Header />
      <main className='landing-page'>
        <Hero />
        <Service />
        <Tour />
        <SuccessCases />
        <AccessibilityForm />
      </main>
      <Footer />
    </>
  )
}

export default App
