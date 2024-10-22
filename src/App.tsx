import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Service from './components/service/Service'

function App() {
  return (
    <>
      <Header />
      <main className='landing-page'>
        <Hero />
        <Service />
      </main>
    </>
  )
}

export default App
