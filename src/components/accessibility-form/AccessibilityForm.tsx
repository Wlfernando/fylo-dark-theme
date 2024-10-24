import Button from "../button/Button";
import './AccessibilityForm.css'

export default function AccessibilityForm() {
  return (
    <>
      <section className="accessibility-form">
        <h2 className="accessibility-form__title">Get early access today</h2>
        <p className="accessibility-form__text">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <form className="accessibility-form__form" action="#">
          <input className="accessibility-form__input" type="email" placeholder="email@example.com"/>
          <Button className="accessibility-form__btn">Get Started For Free</Button>
        </form>
      </section>
    </>
  )
}