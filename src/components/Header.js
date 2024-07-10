import React from 'react';
import logo from '../assets/projlogo.jpeg';
import './Header.css';

export default function Header() {
    return (
        <header className="app-header bg-stone-800">
            <img className='app-logo' src={logo} alt='Project management app logo' />
            <h1 className='app-title'>ProjectPilot</h1>
        </header>
    )
}
