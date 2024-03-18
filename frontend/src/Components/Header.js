import React from 'react'
import './Header.css';
import logo from '../images/logo.jpg';

export default function Header() {
  return (
    <div className='Big-header'>
        <div className='Header'>
            <div className='left-header'>
            <img src={logo} alt=""/>
            </div>
            <div className='right-header'>
                <ul>
                    <li>home</li>
                    <li>menu</li>
                    <li>Event</li>
                    <li>location</li>
                </ul>  
            </div>
        </div>

      
    </div>
  )
}
