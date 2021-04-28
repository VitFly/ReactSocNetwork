import React from 'react';
import k from './profile.module.css'

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
              My posts
              <div>
                New post
              </div>
                <div>
                    <div>
                      post1
                    </div>
                    <div>
                      post 2
                    </div>
                </div>
            </div>
      </div>
    )
}

export default  Profile;