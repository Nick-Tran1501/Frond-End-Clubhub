import './App.css';
import 'antd/dist/antd.css'
import LoginPage from './pages/loginpage/LoginPage';
import HomePage from './pages/home/HomePage';
import WelcomePage from './pages/welcome/WelcomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from './pages/profile/ProfilePage'
import Profile from './pages/profile/ProfilePage';
import PrivacyPage from './components/termpolicys/PrivacyPolicy'
import AdminPage from './pages/admin/AdminPage';
import { Route, Routes } from "react-router-dom"
import PrivacyPolicy from './components/termpolicys/PrivacyPolicy';
import TableComponent from './pages/admin/components/TableComponent';




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
    {/* ---------------------------------------------------------------- */}
      
          
      {/* Tuan's area ---- command if you want do not delete it*/}
          {/* <HomePage/> */}
          {/* <WelcomePage/> */}
            {/* <AdminPage /> */}
            {/* <TableComponent/> */}
            {/* <ProfilePage /> */}

      {/* -------------------------------------------------------- */}

    </div>
  );
}

export default App;
