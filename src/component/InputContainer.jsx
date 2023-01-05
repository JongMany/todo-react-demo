import React, { useContext } from 'react'

import styles from './InputContainer.module.css';
import { DarkModeContext } from '../contexts/DarkModeContext';

export default function InputContainer(props) {
  const {isDarkMode} = useContext(DarkModeContext);

  return (
    <div className={`${styles['input-container']} ${!isDarkMode && styles.lightmode}`}>
      {props.children}
    </div>
  )
}
