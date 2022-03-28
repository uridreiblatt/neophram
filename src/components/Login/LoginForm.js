import React  , {useState}from 'react'
import './LoginForm.css'
import api from '../../Api/api'
//import Button from 'react-bootstrap/Button'
// 





async function loginUser(credentials) {
  //api.get("http://localhost:13438/api/Customer",
   api.post("/Authenticate/login",JSON.stringify(credentials),
  // {method: "GET",
  //   headers: {       
  //     'Access-Control-Allow-Origin': '*',
  //     "Accept": "application/json",
  //    "Content-type": "application/json"}}
   {method: "POST",
    headers: {       
      'Access-Control-Allow-Origin': '*',
      "Accept": "application/json",
     "Content-type": "application/json"}}
)
.then(res => {
    alert(JSON.stringify(res));
    //localStorage.setItem('token', token);
        
})
.catch(error => {
  if (error.response) {
    // Request made and server responded
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  alert(JSON.stringify(error));
});
 } 
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
      const token = await loginUser({
        username,
        password
      });
      //props.setToken(true);
      props.fsetislogedin(true);
      
      // setError("Login Success");
    }
  


    return (


        <form className="login-form" onSubmit={handleSubmit}>
            <h3>Sign In</h3>



            <div className="form-grouplogin" >
            <label>User name</label>
            <input type="text" className="form-control" placeholder="User name" onChange={e=> setUserName(e.target.value)} value={username} />
        </div>
        <div className="form-grouplogin" onSubmit={handleSubmit}>
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" onChange={e=> setUserEmail(e.target.value)} value={UserEmail} />
        </div>

        <div className="form-grouplogin">
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
 