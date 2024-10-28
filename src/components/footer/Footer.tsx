import Logo from "../logo/Logo";
import './Footer.css'
import pin from '@Assets/icon-location.svg'
import phoneImg from '@Assets/icon-phone.svg'
import mailImg from '@Assets/icon-email.svg'
import facebook from '@Assets/jam--facebook-circle.png'
import twitter from '@Assets/jam--twitter-circle.png'
import istagram from '@Assets/dashicons--instagram.png'

const fakeLinks = [
  'About Us',
  'Jobs',
  'Press',
  'Blog',
  'Contact',
  'Terms',
  'Privacy',
  facebook,
  twitter,
  istagram,
];

const alternativeText = [
  'facebook',
  'twitter',
  'instagram',
];

const Anchors = ({array}:{array: (string | React.ReactElement)[]}) => <nav className="footer__nav">{array.map((a, i) => <a key={i} href="#" className="footer__anchor" >{a}</a>)}</nav>;
const insertImg = (src: string, alt: string) => <img className="footer__icon" src={src} alt={`${alt}\'s anchor`} />

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Logo className="footer__logo"/>
        <address className="footer__address">
          <img src={pin} alt='pin' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque voluptatibus nulla, quam doloribus, obcaecati, incidunt adipisci corrupti saepe enim</p>
        </address>
        <address className="footer__address">
          <img src={phoneImg} alt="phone" />
          <p>+1-543-123-4567</p>
          <img src={mailImg} alt="mail" />
          <p>example@fylo.com</p>
        </address>
        <Anchors array={fakeLinks.slice(0,4)} />
        <Anchors array={fakeLinks.slice(4,7)} />
        <Anchors array={fakeLinks.slice(7).map((s, i) => insertImg(s, alternativeText[i]))} />
        <p className='footer__text'>Challenge from <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. Coded by Fernando A. Malfavón &copy; 2024.</p>
      </footer>
    </>
  )
}