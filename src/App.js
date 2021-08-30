
import React  from 'react'
import { useState } from 'react';
import { Switch , Route ,useHistory } from 'react-router-dom';
import MultiStageForm from './components/MultiStageForm/MultiStageForm';
import Login from './components/Login/LoginForm'
import TopMenu from './components/TopMenu';
import Home from './Pages/Home'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';



function App() {
  const history = useHistory();
  const [islogedIn, setislogedIn] = useState(false);
  const [username, setUserName] = useState('urid');
  
  //component={() => <Dashboard isAuthed={true} />}
  function fsetislogedin(e)
  {
    if (e!=null)
    {
      setUserName ( e[0].pharmacistName);
      setislogedIn  (true);
    }
    else{
      setislogedIn  (false);
    }
    try{history.push("");}
    catch{}
    
  }

  // if (!islogedIn) {
  //   return (
  //   <>
  //     <TopMenu islogedIn={islogedIn} userName = {username} />
  //   <Login fsetislogedin={fsetislogedin} />
  //   </>)
  // }
  return (

 <div className="App">
      <Router>
        <TopMenu islogedIn={islogedIn} userName = {username} />
        {islogedIn ? 
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Login' exact component={Login} />
        <Route path='/MultiStageForm/:barcode' exact component={MultiStageForm} />      
        <Route path='/MultiStageForm/:barcode' exact component={MultiStageForm} />                              
        {/* <Route path='/customer/details/:id'  exact  component={UserDetails} />  
        <Route path='/customer/customerinfo/:id'  component={TabCustomres } />  */}
      </Switch>
        : <Login fsetislogedin={fsetislogedin} />}
        
      </Router>
    </div>

  );
}

export default App;
