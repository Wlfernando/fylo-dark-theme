import './SuccessCases.css'
import personOne from '@Assets/profile-1.jpg'
import personTwo from '@Assets/profile-2.jpg'
import personThree from '@Assets/profile-3.jpg'
import List from '../list/List'
import quote from '@Assets/bg-quotes.png'

const text = 'Fylo has improved our team productivity by an order of magnitude. Since makin the switch our tema has become a well-oiled collaboration machine.'
const occupation = 'founder & CEO, Huddle'

const profiles = [{
  img: personOne,
  name: 'Satish Patel',
},{
  img: personTwo,
  name: 'Bruce McKenzie',
},{
  img: personThree,
  name: 'Iva Boyd',
}]

export default function SuccessCases() {
  return (
    <>
      <List name='success-cases'>
        {profiles.map(({name, img}, i) => <li className='success-cases__item' key={name} style={{'--width': '350px'} as React.CSSProperties}>
          {i === 0 && <img className='success-cases__quote' src={quote} alt='quote' />}
          <article className='success-cases__card'>
            <p className='success-cases__text'>{text}</p>
            <div className='success-cases__profile'>
              <img className='success-cases__profile-img' src={img} alt={`picture of ${name}`} />
              <h3 className='success-cases__profile-name'>{name}</h3>
              <p className='success-cases__profile-occupation'>{occupation}</p>
            </div>
          </article>
        </li>)}
      </List>
    </>
  )
}