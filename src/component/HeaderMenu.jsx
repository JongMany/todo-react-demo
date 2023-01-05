import React from 'react'

import styles from './HeaderMenu.module.css';

export default function HeaderMenu({setMenuOptions, menuOptions}) {

  const optionHandler = (e) => {
    const option = e.target.dataset.option;
    console.log(option)
    setMenuOptions(option);
  }

  return (
    <ul className={styles['header-menu']}>
      <li data-option='all' onClick={optionHandler} className={checkIsActive(menuOptions, 'all')} >All</li>
      <li data-option='active' onClick={optionHandler} className={checkIsActive(menuOptions, 'active')}>Active</li>
      <li data-option='completed' onClick={optionHandler} className={checkIsActive(menuOptions, 'completed')}>Completed</li>
    </ul>
  )
}

function checkIsActive(state, str) {
  return state === str ? styles.active : '';
}
