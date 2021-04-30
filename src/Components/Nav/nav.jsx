import React from 'react';
import s from './nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
             <div className={s.nav__link}>
                <a href='/profile'> Profile</a>
             </div>
            <div className={s.nav__link}>
              <a href='/dialogs'> Messages</a> 
            </div> 
            <div className={s.nav__link}>
                <a href='/news'> News</a> 
            </div> 
            <div className={s.nav__link}>
                <a href='/music'> Music</a>
             </div> 
            <div className={s.nav__link}>
               <a href='/settings'> Settings</a>
             </div> 
      </nav>
    )
}

export default Nav;