import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {Sun,Moon} from 'lucide-react';

export const ThemeToggle = () => {

    // Logic for theme toggle can be added here
    const[isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme === 'dark') { 
            document.documentElement.classList.add('dark');
            
        }
        else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    },[]);


    const toggleTheme = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }
        else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
        
    } 

  return (
    <div>
        <button onClick={toggleTheme}>{isDarkMode  ? <Sun className='h-6 w-6 text-yellow-300'/> : <Moon className='h-6 w-6 text-blue-900'/>}
      </button>
    </div>
  )
};
