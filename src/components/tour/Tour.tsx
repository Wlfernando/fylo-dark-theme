import BlackBoard from "../black-board/BlackBoard";
import img from '@Assets/illustration-stay-productive.png'
import './Tour.css'
import arrow from '@Assets/icon-arrow.svg'

export default function Tour() {
  return (
    <>
      <BlackBoard
        className="tour"
        row
        img={{img, alt: 'communication anywhere'}}
        title="Stay productive, wherever you are"
        text={`Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. \n\nSecurely share files and folders with friends, family and colleagues for live collaboration. No emails attachments required.`}
      >
        <a className="tour__link" href="#">See how Fylo works
          <img className="tour__arrow" src={arrow} alt='arrow' />
        </a>
      </BlackBoard>
    </>
  )
}