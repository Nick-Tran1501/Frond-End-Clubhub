import './App.css';
import 'antd/dist/antd.css'
import LoginPage from './pages/loginpage/LoginPage';
import Home from './pages/home/HomePage';
import Welcome from './pages/welcome/WelcomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './pages/profile/ProfilePage'

import AdminPage from './pages/admin/AdminPage';

import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
          <Routes>
            {/* <Route path='/*' element={<LoginPage/>}/> */}
            <Route path='/home' element={<Home/>}/>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>

          {/* <AdminPage/> */}
          

       {/* <LoginPage/> */}
        {/* <Home/> */}
        {/* <Welcome/> */}
    </div>
  );
}

export default App;
