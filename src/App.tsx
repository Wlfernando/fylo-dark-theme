import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Service from './components/service/Service'
import Tour from './components/tour/Tour'

function App() {
  return (
    <>
      <Header />
      <main className='landing-page'>
        <Hero />
        <Service />
        <Tour />
      </main>
    </>
  )
}

export default App
