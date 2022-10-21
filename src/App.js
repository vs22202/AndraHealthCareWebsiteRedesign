
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import {ThemeProvider} from 'styled-components';
import {Navbar} from './components/Navbar';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import { BottomNav } from './components/BottomNav';
import LoginPage from './Pages/LoginPage/LoginPage';
import InformationPage from './Pages/InformationPage/InformationPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import HealthCarePage from './Pages/InformationPage/HealthCarePage/HealthCarePage';
import AppointmentPage from './Pages/InformationPage/AppointmentPage/AppointmentPage';
import BenifitPage from './Pages/InformationPage/BenifitPage/BenifitPage';
import HelpPage from './Pages/HelpPage/HelpPage';
import GeneralPage from './Pages/InformationPage/HealthCarePage/GeneralPage/GeneralPage';
import ExpertPage from './Pages/InformationPage/HealthCarePage/ExpertPage/ExpertPage';
import { AuthProvider } from './contexts/AuthContext';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';
import ActualProfile from './Pages/ProfilePage/ActualProfile';
import ProfilePage from './Pages/ProfilePage/Profile';
import { useState } from 'react';
import Accessablitybar from './components/AccesabilityBar';
import PrivateRoute from './components/PrivateRoute';
const mainth={
    pcolor:'#fff',
    scolor:'#806517',
    hovercolor:'black',
    dcolor:'rgba(255,0,0,0.3)',
    sucolor:'rgba(0,255,0,0.3)',
    tcolor:'rgba(96,62,17,0.2)',
    bfontsize:'1rem',
    hfontsize:'2.5rem'
  };
const secondth={
  pcolor:'#fff',
  scolor:'rgba(247, 202, 24, 1)',
  hovercolor:'black',
  dcolor:'rgba(255,0,0,0.3)',
  sucolor:'rgba(0,255,0,0.3)',
  tcolor:'rgba(247, 202, 24, 0.2)',
  bfontsize:'1rem',
  hfontsize:'2.5rem'
};
const thirdth={
  pcolor:'#fff',
  scolor:'rgb(200,162,200)',
  hovercolor:'black',
  dcolor:'rgba(255,0,0,0.3)',
  sucolor:'rgba(0,255,0,0.3)',
  tcolor:'rgba(200,162,200,0.2)',
  bfontsize:'1rem',
  hfontsize:'2.5rem'
};
function App() {

  const [theme,setTheme]=useState('theme1');
  function handleTheme(event){
    event.preventDefault();
      if(event.target.value==='#806517'){
        setTheme('theme1');
      }
      else if(event.target.value==='rgba(247, 202, 24, 1)'){
        setTheme('theme2');
      }
      else{
        setTheme('theme3');
      }
  }

  return (
    <div style={{position:'relative', minHeight:"100vh",display:'flex',flexDirection:'column'}}>
    <AuthProvider>
      <ThemeProvider theme={theme==='theme1' ? mainth : theme==='theme2' ? secondth :thirdth}>
        <Router>
        <Accessablitybar handleTheme={handleTheme}/>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/Login' exact component={LoginPage}/>
          <Route path='/Information' exact component={InformationPage}/>
          <Route path='/Register' exact component={RegisterPage}/>
          <Route path='/Healthcare' exact component={HealthCarePage}/>
          <PrivateRoute path='/Appointment' exact component={RegisterPage}/>
          <PrivateRoute path='/Benifit' exact component={BenifitPage}/>
          <Route path='/Help' exact component={HelpPage}/>
          <Route path='/Healthcare/General' exact component={GeneralPage}/>
          <Route path='/Healthcare/Expert' exact component={ExpertPage}/>
          <PrivateRoute path='/Forgot-password' exact component={ForgotPasswordPage}/>
          <PrivateRoute path='/Profile' exact component={ProfilePage}/>
          <PrivateRoute path='/ActualProfile' exact component={ActualProfile}/>
        </Switch>
        <BottomNav/>
        </Router>
      </ThemeProvider>
    </AuthProvider>
    </div>
  );
}

export default App;
