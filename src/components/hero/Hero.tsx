import './Hero.css'
import illustration from '../../assets/illustration-intro.png'
import Button from '../button/Button'
import BlackBoard from '../black-board/BlackBoard'

export default function Hero({
  ref_,
}:{
  ref_: React.LegacyRef<HTMLElement>;
}) {
  return (
    <>
      <BlackBoard
        className='hero'
        img={{img: illustration, alt: 'Cloud\'s saving files'}}
        titlePage='All your files in one secure location, accesssible anywhere.'
        text='Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.'
        ref_={ref_}
      >
        <Button className='hero__btn'>Get Started</Button>
      </BlackBoard>
    </>
  )
}