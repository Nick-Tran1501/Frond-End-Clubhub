import './App.css';
import 'antd/dist/antd.css'
import LoginContainer from './Login/Login';
import Home from './pages/home/home';
import Welcome from './pages/welcome/welcome';
import "bootstrap/dist/css/bootstrap.min.css";
import Post from './components/Post/Post';
function App() {

 

  return (
    <div className="App">

       {/* <LoginContainer/> */}

        <Post/>

      {/* <Home/> */}

      {/* <Welcome/> */}
    </div>
  );
}

export default App;
