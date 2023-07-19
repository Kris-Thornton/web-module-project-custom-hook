import React, {useState} from 'react';
import LocalStorage from "./useLocalStorage";




const DarkModeSwitch = (initialValue) => {
    const [darkMode, setDarkMode] = LocalStorage('darkMode',initialValue)
    return [darkMode, setDarkMode]
}

export default DarkModeSwitch