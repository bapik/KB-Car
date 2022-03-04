import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Form.module.sass'

const Label = ({ text }) => <label className={styles.label}>{text}</label>

export const Form = () => {
  const { register, handleSubmit } = useForm()
  const [button, setButton] = useState('Wyślij')

  async function onSubmit(data, event) {
    event.preventDefault()
    const formData = new FormData()

    formData.append('yourName', data.name)
    formData.append('yourEmail', data.email)
    formData.append('yourMessage', data.message)

    const request = new XMLHttpRequest()
    request.open('POST', `https://www.panel.kb-car.pl/wp-json/contact-form-7/v1/contact-forms/49/feedback`)

    request.send(data)
    setButton('Wysłano. Dziękujemy!')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Label text='Imię' />
      <input placeholder='Jan Kowalski' type='text' className={styles.input} {...register('name', { required: true })} />
      <Label text='Email' />
      <input placeholder='JanKowalski@gmail.com' type='text' className={styles.input} {...register('email', { required: true })} />
      <Label text='Wiadomość' />
      <textarea placeholder='Przykładowa wiadomość' {...register('message', { required: true })} />
      <div className={styles.radioGrid}>
        <input type='checkbox' {...register('acceptance', { required: true })} />
        <span className={styles.acceptText}>Wyrażam zgodę na przetwarzanie danych w celu odpowiedzi na powyższą wiadomość.</span>
      </div>
      <input type='submit' value={button} className={styles.button} />
    </form>
  )
}
