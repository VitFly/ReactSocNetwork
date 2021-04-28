import React from 'react';
import s from './nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
          <div className={s.nav__link}><a href> Profile</a> </div>
          <div className={s.nav__link}><a href> Messages</a> </div> 
          <div className={s.nav__link}><a href> News</a> </div> 
          <div className={s.nav__link}><a href> Music</a> </div> 
          <div className={s.nav__link}><a href> Settings</a> </div> 
      </nav>
    )
}

export default Nav;