import React from 'react';
import k from './Articles.module.css';
import Post from './Post/Post'

const Articles = () => {
    return (
        <div className={k.content} >
          <div>
            Some article
          </div>
          <div>
              <Post comment='Hey man, how are you?' likecounts=' 220 likes!' />
              <Post comment='Hey bro, i am okay' likecounts=' 170 likes!'/>
              <Post comment='Saruman'/>
              <Post comment='Gandalfs Gray!'/>
              <Post comment='Theoden Rhokhansky'/>
          </div>
      </div>
    )
}

export default  Articles;