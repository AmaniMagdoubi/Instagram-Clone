import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Images from './components/Images';
import SignupOrLogin from './components/signupOrLogin';
import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom'; 
import { readUsers } from './utils'; 


function App() {
  const [user, setUser] = useState(); 
  
  const [listUsers, setListUsers] = useState([]); 

  useEffect(()=> {
    readUsers(setListUsers)
  }, [listUsers])

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>Login</Link>
          </li>

          <li>
            <Link to='feed'>Home Feed</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path='/' element= {
          <div>
            <SignupOrLogin setter={setUser}/>
          {user ? <h1>{user}</h1>: <h1>Not logged in</h1> }
            <div>
            {listUsers && readUsers.map((item, index) => {return(
                <div>
                <br></br>
                <h3>Friends:</h3>
                <p>{item.userName}</p>
            </div>
            })</div>
          
        )}
          
          
          
        } /> 
        
        <Route path='/feed' element ={
          <div> 
            <Header />
            <Images/> 
            <Posts />
          </div>} /> 
        
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

// export default App;


