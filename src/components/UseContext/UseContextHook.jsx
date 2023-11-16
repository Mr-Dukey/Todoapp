import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import './UseCon.css'
import Page1 from './Page1';
export const colortheme = React.createContext('');

export default function UseContextHook() {

    const [theme, setTheme] = useState('light');

    

    return (
        <div style={{textAlign:'center'}}>
            <Form>
                <Form.Check
                type='switch'
                onChange={()=> {
                    setTheme((theme)=> theme === 'light'?'dark':'light');
                }}
                />
                {theme} Theme
            </Form>
            <colortheme.Provider value={theme}>
                <Page1/>
            </colortheme.Provider>
        </div>
    )
}

