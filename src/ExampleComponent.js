import React from 'react'

import styles from './styles.css'

export default ({ text }) => {
  return (
    <div className={styles.test}>
      Example Component: {text}
    </div>
  )
}
