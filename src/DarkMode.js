import React from 'react';
import { useState } from 'react';

const DarkMode = () => {
    const [useDarkMode, setUseDarkMode] = useState(false);

    return <div className={ useDarkMode ? "dark-mode dark" : "dark-mode light"}>
        <h1>Dark Mode from js</h1>
        <label>
            <input type="checkbox" 
            onChange={ (event) => {setUseDarkMode(!useDarkMode);}} 
            /> 
            <span style={{marginLeft: '8px'}}> Use dark mode? </span>
        </label>
    </div>
}

export default DarkMode;