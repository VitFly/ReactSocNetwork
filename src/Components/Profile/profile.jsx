import React from 'react';
import k from './profile.module.css';
import Articles from './Atrticles/Articles'

const Profile = () => {
    return (
        <div className={k.content} >
          <div>
             <img className='content__main__img' src ='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg' alt=''/>
          </div>
          <div>
            ava + description
          </div>
          <div>
            <Articles />
          </div>
      </div>
    )
}

export default  Profile;