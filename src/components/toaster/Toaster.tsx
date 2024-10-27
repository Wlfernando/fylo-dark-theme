import audioSuccess from '@Assets/short-success-sound-glockenspiel-treasure-video-game-6346.mp3'
import check from '@Assets/icon-success-check.svg'
import './Toaster.css'
import { AnimationEventHandler } from 'react'

export default function Toaster({
  remove,
}: {
  remove: AnimationEventHandler;
}) {
  return (
    <>
      <aside className='toaster' onAnimationEnd={remove}>
        <audio src={audioSuccess} autoPlay />
        <hgroup className='toaster__hgroup' >
          <img src={check} alt="check" />
          <h3 className='toaster__tittle'>Message Send!</h3>
        </hgroup>
        <p className='toaster__mssg' >Thanks for completing the form. We'll be in touch soon!</p>
        <p className='toaster__mssg' >Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6346">Pixabay</a></p>
      </aside>
    </>
  )
}
