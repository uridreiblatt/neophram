
import React  from 'react'
import { useState } from 'react';
import { Switch , Route } from 'react-router-dom';
import MultiStageForm from './components/MultiStageForm/MultiStageForm';
import Login from './components/Login/LoginForm'
import TopMenu from './components/TopMenu';
import Home from './Pages/Home'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';



function App() {
  const [islogedIn, setislogedIn] = useState(false);
  return (

 <div className="App">
      <Router>
        <TopMenu islogedIn={islogedIn} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Login' exact component={Login} />
          <Route path='/MultiStageForm' component={MultiStageForm} />                                
          {/* <Route path='/customer/details/:id'  exact  component={UserDetails} />  
          <Route path='/customer/customerinfo/:id'  component={TabCustomres } />  */}
        </Switch>
      </Router>
    </div>

  );
}

export default App;
