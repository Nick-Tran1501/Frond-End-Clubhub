import './App.css';
import 'antd/dist/antd.css'
import LoginContainer from './Login/Login';
import Home from './pages/home/home';
import Welcome from './pages/welcome/welcome';
import "bootstrap/dist/css/bootstrap.min.css";

import PostList from './components/PostList/PostList';
import AlterHome from './pages/alterHome/alterHome';


function App() {

 

  return (
    <div className="App">

        <LoginContainer/>

        {/* <PostList/> */}
        {/* <Home/> */}
        {/*<Welcome/> */}

        {/* <AlterHome/> */}
    </div>
  );
}

export default App;
