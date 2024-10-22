import './Hero.css'
import illustration from '../../assets/illustration-intro.png'
import Button from '../button/Button'

export default function Hero() {
  return (
    <>
      <section className='hero'>
        <img className='hero__img' src={illustration} alt="" />
        <h1 className='hero__title'>All your files in one secure location, accesssible anywhere.</h1>
        <p className='hero__txt'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <Button className='hero__btn'>Get Started</Button>
      </section>
    </>
  )
}