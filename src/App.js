// import logo from './logo.svg';
import './App.css';

import  Profile from './Components/profile';
import Header from './Components/header';
import Nav from './Components/nav';

const App = ()  => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div> 
  );
}


export default App;

