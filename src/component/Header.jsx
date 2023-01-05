import React from 'react'
import {BsFillSunFill } from 'react-icons/bs';

import HeaderMenu from './HeaderMenu';

import styles from './Header.module.css';

export default function Header({setMenuOptions, menuOptions}) {
  return (
    <header className={styles.header}>
      <span >
        <BsFillSunFill />
      </span>
      <HeaderMenu setMenuOptions={setMenuOptions} menuOptions={menuOptions} />
    </header>
  )
}
