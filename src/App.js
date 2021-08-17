import PR from "./components/profileList";
import {useState} from 'react'
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Profiles from "./components/profiles";
import PrivateRoute from './components/PrivateRoute'
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import AboutUs from "./components/aboutUs";
import User from "./components/user";

function App() {
  const profiles = PR;
  const [login, setLogin] = useState("false");
  const loginHandler = () => {
    setLogin(!login);
  };
  return (
    <div className='App'>
      
      <Router>
    
        <Navbar loginHandler={loginHandler} login={login}/>
        <Switch>
      <Route exact path='/' component={Home}  />
      <Route exact path='/aboutUs' component={AboutUs}  />
      {/* <Route  path='/profiles' exact component={Profiles}  /> */}
      <Route  path='/profiles/:ID' component={User}   />
      <PrivateRoute
          path="/profiles"
          component={Profiles}
          isAuth={login}
        />
     
      

      </Switch>
      
      </Router>
     
    </div>
  );
}

export default App;
