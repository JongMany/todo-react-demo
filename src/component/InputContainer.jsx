import React from 'react'

import styles from './InputContainer.module.css';

export default function InputContainer(props) {
  return (
    <div className={styles['input-container']}>
      {props.children}
    </div>
  )
}
