import Logo from '../logo/Logo'
import './Header.css'

export default function Header() {
  return (
    <>
      <header className='header'>
        <Logo className='header__logo' />
        <nav className='header__nav'>
          <a className='header__link' href="#">Features</a>
          <a className='header__link' href="#">Team</a>
          <a className='header__link' href="#">Sign In</a>
        </nav>
      </header>
    </>
  )
}