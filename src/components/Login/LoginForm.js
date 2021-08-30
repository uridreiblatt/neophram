import React  , {useState}from 'react'
import './LoginForm.css'
import axios from 'axios'
import formJSONpharmacist from '../../Elements/pharmacist.json';



//const apiUrl = 'http://localhost:3001';
const apiUrl = 'https://localhost:44339/Api';


// const api = axios.create({
//     //baseURL: 'http://localhost/WebApiPg/api'
//     //baseURL: 'http://localhost:61518/api'
//     baseURL: 'https://localhost:44339/Api'
//    })
axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 console.log('formJSONpharmacist',formJSONpharmacist)
const LoginForm = (props) => {
    //const {handleChanges,values,handleSubmit, errors, NetError} = useForm(validate);
    //const storedJwt = localStorage.getItem('token');
    const [username, setUserName] = useState('urid');
    const [UserEmail, setUserEmail] = useState('urid@gmail.com');
    const [password, setPassword] = useState('pwd');
    const [error, setError] = useState();
    // const [jwt, setjwt] = useState();

    
    
    const handleSubmit = async e => {
      e.preventDefault();    
      var pharmacist=  formJSONpharmacist.filter(item => item.pharmacistName === username  )
      if (pharmacist != null){
        props.fsetislogedin(pharmacist);
    }
    

      // const token = await loginUser({
      //   username,
      //   password
      // });
      // props.setToken(true);
      // localStorage.setItem('token', token);
      // setError("Login Success");
    }
  


    return (
        // <div >
        //      <form className='login-form' onSubmit={handleSubmit}>
        //      <a className="logo"> Elogy <span className="span-green"> Avi innovation</span><img src={logo} 
        //      className="App-logo" alt="logo" /></a>
             
        //         <h3>Login</h3>
             
               
        //                 <label >
        //                     User name  <input type='text' 
        //                         name='username' 
        //                         id='username' 
                                
        //                         placeholder='user name' 
        //                         value={username} 
        //                         onChange={e => setUserName(e.target.value)} />   
        //                 </label>
                       
        //                 <label  htmlFor='password'>
        //                 password  <input type='password' name='password' id='password' 
        //                 placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
             
        //                 </label>
                        
                     
        //                 {/* <label className='form-label' htmlFor='email'>
        //                     Email   <input type='email' name='email' id='email' className='form-input' placeholder='email' value={values.email} onChange={handleChanges}/>
        //                 </label> */}
                      
            
                 
             
        //        <button type="submit" className='form-input-btn'>
        //            Login
        //        </button>
        //        {/* <span className='form-input-login'>
        //             Allredy have an acount Login <a href="#">here</a>
        //        </span> */}
        //        <span className='span-errors'>
        //        { <span className="span-errors">{error}</span>} 
        //        </span>
             
        //      </form>
        // </div>

        <form className="login-form" onSubmit={handleSubmit}>
            <h3>Sign In</h3>



            <div className="form-group" >
            <label>User name</label>
            <input type="text" className="form-control" placeholder="User name" onChange={e=> setUserName(e.target.value)} value={username} />
        </div>
        <div className="form-group" onSubmit={handleSubmit}>
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" onChange={e=> setUserEmail(e.target.value)} value={UserEmail} />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
        </div>

        {/* <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div> */}

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
        <span className='span-errors'>
        { <span className="span-errors">{error}</span>} 
        </span>
    </form>
    )
}

 export default LoginForm
 