const {
  VITE_EMAILJS_SERVICE: SERVICE_ID,
  VITE_EMAILJS_TEMPLATE: TEMPLATE_ID,
  VITE_EMAILJS_USER: USER_ID,
} = import.meta.env

export default function post(email: string) {
  return fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'service_id': SERVICE_ID,
      'template_id': TEMPLATE_ID,
      'user_id': USER_ID,
      'template_params': {
        email,
      }
    })
  })
}