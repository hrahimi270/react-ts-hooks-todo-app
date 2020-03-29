import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => { } });

type props = {
    children: React.ReactNode
}

export function ThemeState({ children }: props) {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme)
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}