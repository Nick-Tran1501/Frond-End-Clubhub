import './App.css';
import 'antd/dist/antd.css'
import LoginPage from './pages/loginpage/LoginPage';
import HomePage from './pages/home/HomePage';
import WelcomePage from './pages/welcome/WelcomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from './pages/profile/ProfilePage'
import Profile from './pages/profile/ProfilePage';
import { Route, Routes } from "react-router-dom"
import AdminPage from './pages/admin/AdminPage';

import PresidentPage from './pages/president/PresidentPage';

import ClubRegisterForm from './components/cludRegister/ClubRegisterForm';





function App() {
  return (
    <div className="App">
      {/* Nick's area  */}
        {/* <Routes>

            <Route path='/*' element={<LoginPage/>}/>

            <Route path='/home' element={<HomePage/>}/>
            <Route path='/welcome' element={<WelcomePage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
          </Routes> */}

      {/* Tuan's area ---- command if you want do not delete it*/}
            {/* <LoginPage /> */}
            {/* <PresidentPage />
            <AdminPage /> */}

      {/* -------------------------------------------------------- */}

    </div>
  );
}

export default App;
