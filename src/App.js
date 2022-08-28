import './App.css';
import 'antd/dist/antd.css'
import LoginPage from './pages/loginpage/LoginPage';
import Home from './pages/home/HomePage';
import Welcome from './pages/welcome/WelcomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './pages/profile/ProfilePage'
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/*' element={<LoginPage/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>



       {/* <LoginPage/> */}
        <Home/>
        {/* <Welcome/> */}
        <Profile />
    </div>
  );
}

export default App;
