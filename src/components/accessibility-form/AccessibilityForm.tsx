import { useRef, useState } from "react";
import Button from "../button/Button";
import './AccessibilityForm.css'

const emailValidate = /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/

export default function AccessibilityForm({
  send,
}:{
  send: Function;
}) {
  const emailRef = useRef<null | HTMLInputElement>(null);
  const [error, setError] = useState('');

  return (
    <>
      <section className="accessibility-form">
        <div className="accessibility-form__container">
          <h2 className="accessibility-form__title">Get early access today</h2>
          <p className="accessibility-form__text">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
          <form 
            className="accessibility-form__form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault()
              const email = emailRef.current!
              const { value } = email

              if (!emailValidate.test(value)) {
                const message = 'Please enter a valid email address'
                email.setCustomValidity(message)
                setError(message)
                return
              } else if (error) {
                email.setCustomValidity('')
                setError('')
              }

              send()
              e.currentTarget.reset()
            }}
          >
            <input ref={emailRef} className="accessibility-form__input" type="email" placeholder="email@example.com"/>
            <Button submit className="accessibility-form__btn">Get Started For Free</Button>
            <span className="accessibility-form__error">{emailRef.current?.validationMessage}</span>
          </form>
        </div>
      </section>
    </>
  )
}