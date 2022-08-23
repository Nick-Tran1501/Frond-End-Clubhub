import './App.css';
import 'antd/dist/antd.css'
import LoginPage from './Login/Login';
import Home from './pages/home/home';
import Welcome from './pages/welcome/welcome';
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './pages/profile/profile'
import {Route,Routes, Router,Link} from "react-router-dom"

function App() {

 

  return (
    <div className="App">
          <Routes>
            <Route path='/*' element={<LoginPage/>}/>
            <Route path='/welcome' element={<Welcome/>}/>

          </Routes>
       
        {/* <Home/> */}
        {/*<Welcome/> */}


        {/* <Profile /> */}
    </div>
  );
}

export default App;
