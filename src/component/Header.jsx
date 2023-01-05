import React, { useContext } from 'react'
import {BsFillSunFill } from 'react-icons/bs';

import HeaderMenu from './HeaderMenu';

import styles from './Header.module.css';
import { DarkModeContext } from '../contexts/DarkModeContext';

export default function Header({setMenuOptions, menuOptions}) {
  const {isDarkMode, toggleDarkMode} = useContext(DarkModeContext);
  
  return (
    <header className={`${styles.header} ${!isDarkMode && styles.lightmode}`}>
      <span onClick={toggleDarkMode}>
        <BsFillSunFill />
      </span>
      <HeaderMenu setMenuOptions={setMenuOptions} menuOptions={menuOptions} />
    </header>
  )
}
