// import logo from './logo.svg';
import './App.css';

const App = ()  => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img  src ='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mr-bread-logo-design-template-8a8bf7264deccf537f8dd318785ebd6f_screen.jpg?ts=1579209248' alt=""/ >
      </header>
      <nav className='nav'>
          <div><a href> Profile</a> </div>
          <div><a href> Messages</a> </div> 
          <div><a href> News</a> </div> 
          <div><a href> Music</a> </div> 
          <div><a href> Settings</a> </div> 
      </nav>
      <div className='content' >
          <div>
             <img src ='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg' alt=''/>
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
    </div> 
  );
}


export default App;
