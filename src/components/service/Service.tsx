import List from "../list/List";
import accessibility from '@Assets/icon-access-anywhere.svg'
import shield from '@Assets/icon-security.svg'
import collab from '@Assets/icon-collaboration.svg'
import file from '@Assets/icon-any-file.svg'
import './Service.css'

const services = [{
  img: {
    img: accessibility,
    alt: 'computer and cellphone'
  },
  title: 'Access your files, anywhere',
  text: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
},{
  img: {
    img: shield,
    alt: 'shield with check'
  },
  title: 'Security you can trust',
  text: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
},{
  img: {
    img: collab,
    alt: 'sync image'
  },
  title: 'Real-time collaboration',
  text: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
},{
  img: {
    img: file,
    alt: 'directory'
  },
  title: 'Store any type of file',
  text: 'Whether you\'re sharing holydays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.'
}]

export default function Service() {
  return (
    <>
      <List name="service">
        {services.map(({img, title, text}, i) => <li key={i} >
          <article className='service__card' >
            <img src={img.img} alt={img.alt} />
            <h3 className="service__title">{title}</h3>
            <p className="service__text">{text}</p>
          </article>
        </li>)}
      </List>
    </>
  )
}