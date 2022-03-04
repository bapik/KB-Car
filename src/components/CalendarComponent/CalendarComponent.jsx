import { useState } from 'react'
import Calendar from 'react-calendar'
import { useForm } from 'react-hook-form'
import './styles.sass'
import styles from './CalendarComponent.module.sass'

const Label = ({ text }) => <label className={styles.label}>{text}</label>

export const CalendarComponent = () => {
  const [clickedDate, setDate] = useState(new Date())
  const [button, setButton] = useState('Zarezerwuj')
  const { register, handleSubmit } = useForm()

  const changeDate = (event) => setDate(event)

  async function onSubmit(data, event) {
    event.preventDefault()
    const form = new FormData()

    form.append('yourName', data.name)
    form.append('yourPhone', data.phone)
    form.append('yourDate', clickedDate)

    const request = new XMLHttpRequest()
    request.open('POST', 'http://www.panel.kb-car.pl/wp-json/contact-form-7/v1/contact-forms/82/feedback')
    request.send(form)

    setButton('Wiadomość została wysłana.')
  }

  return (
    <div>
      <Calendar
        value={clickedDate}
        onChange={changeDate}
        tileDisabled={({ activeStartDate, date, view }) =>
          date.getTime() < new Date()
            ? 'react-calendar__month-view__days__day--past-day'
            : ''
        }
        tileClassName={({ activeStartDate, date, view }) =>
          date.getTime() < new Date()
            ? 'react-calendar__month-view__days__day--past-day'
            : ''
        }
      />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.inputWrapper}>
            <Label text='Imię' />
            <input placeholder='Jan Kowalski' type='text' className={styles.input} {...register('name', { required: true })} />
          </div>
          <div className={styles.inputWrapper}>
            <Label text='Numer telefonu' />
            <input placeholder='123 456 789' type='number' className={styles.input} {...register('number', { required: true })} />
          </div>
        </div>
        <div className={styles.radio}>
          <input type='checkbox' {...register('acceptance', { required: true })} />
          <span className={styles.acceptText}>Wyrażam zgodę na przetwarzanie danych w celu odpowiedzi na powyższą wiadomość.</span>
        </div>
        <input type='submit' className={styles.button} value={button} />
      </form>
    </div>
  )
}
