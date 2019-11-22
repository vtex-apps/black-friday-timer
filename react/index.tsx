import React, { Fragment } from 'react'
import Timer from 'react-compound-timer'
import styles from './styles.css'
import Circles from './components/Circles'
import Logos from './components/Logos'

const BlackFridayTimer: StorefrontFunctionComponent = () => {
  if (typeof document === 'undefined' || typeof document === 'undefined') {
    return null
  }

  const blackFridayDate = new Date('11/29/2019')

  const today = new Date()

  const timeLeft = blackFridayDate.getTime() - today.getTime()

  let isPluralDays = true
  let isPluralHours = true
  let isPluralMinutes = true
  let isPluralSeconds = true

  const formatValueDays = (value: any) => {
    isPluralDays = value !== 2
    return `${value}`
  }

  const formatValueHours = (value: any) => {
    isPluralHours = value !== 2
    return `${value}`
  }

  const formatValueMinutes = (value: any) => {
    isPluralMinutes = value !== 2
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }
  const formatValueSeconds = (value: any) => {
    isPluralSeconds = value !== 2
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }

  return (
    <Fragment>
      <div className={`${styles.container2} flex flex-column pv6 ph4`}>
        <Circles initialTime={timeLeft} />
      </div>
      <div className={`${styles.container} flex flex-column pv6 ph4`}>
        <p className={styles.days}>Our time is now.</p>
        <Timer
          initialTime={timeLeft}
          direction="backward"
        >
          {() => (
            <React.Fragment>
              <div className={styles.timer}>
                <div className="flex flex-column items-center mh10" >
                  <Timer.Days formatValue={formatValueDays} />
                  <div className={styles.small}>{isPluralDays ? 'days' : 'day'}</div>
                </div>
                {'  '}
                <div className="flex flex-column items-center mh4" >
                  <Timer.Hours formatValue={formatValueHours} />
                  <div className={styles.small}>{isPluralHours ? 'hours' : 'hour'}</div>
                </div>
                {' : '}
                <div className="flex flex-column items-center mh4" >
                  <Timer.Minutes formatValue={formatValueMinutes} />
                  <div className={styles.small}>{isPluralMinutes ? 'minutes' : 'minute'}</div>
                </div>
                {' : '}
                <div className="flex flex-column items-center mh4" >
                  <Timer.Seconds formatValue={formatValueSeconds} />
                  <div className={styles.small}>{isPluralSeconds ? 'seconds' : 'second'}</div>
                </div>
              </div>
            </React.Fragment>
          )
          }
        </Timer>
        <Logos />
      </div>
    </Fragment>

  )
}

export default BlackFridayTimer
