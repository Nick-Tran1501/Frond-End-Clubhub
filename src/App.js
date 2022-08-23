import './App.css';
import 'antd/dist/antd.css'
import LoginPage from './Login/Login';
import Home from './pages/home/home';
import Welcome from './pages/welcome/welcome';
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './pages/profile/profile'
import {Route,Routes, Router,Link} from "react-router-dom"
import Register from './Login/Register';

function App() {

 

  return (
    <div className="App">
          <Routes>
            <Route path='/*' element={<LoginPage/>}/>
            {/* <Route path='/register' element={<Register/>}/> */}
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='*' element={alert("404 Not Found")}/>
          </Routes>
          
       {/* <LoginPage/> */}
        <Home/>
        {/*<Welcome/> */}


        {/* <Profile /> */}
    </div>
  );
}

export default App;
