import {useState} from 'react'
import axios from 'axios'

//const apiUrl = 'http://localhost:3001';
const apiUrl = 'https://localhost:44339/Api';


const api = axios.create({
    //baseURL: 'http://localhost/WebApiPg/api'
    //baseURL: 'http://localhost:61518/api'
    //baseURL: 'https://localhost:44339/Api'
    baseURL: apiUrl
   })
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

const useForm = (validate) =>{
    const [values, setValues] = useState({
        username: '',
        email:'',
        password:'',
        jwt:''
    })
    const storedJwt = localStorage.getItem('token');
    const [jwt, setJwt] = useState(storedJwt || null);
    const [errors, setErrors] = useState(null)
    const [NetError, setNetError] = useState('');

    const handleChanges = e =>{
        const {name, value} = e.target
        setValues({...values,[name]:value})
    }
    const getJwt = () => {
        let logindata =  {
            "Username": values.username,
            "Password": values.password
          };
          let txt =  JSON.stringify(logindata);
          console.log(txt);
        api.post("/Authenticate/login",logindata,
          {method: "POST",
            headers: {"Accept": "application/json",
          "Content-type": "application/json"}}
        )
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            setJwt(res.data.token);
            //setValues({...values,['jwt']:jwt})
        })
        .catch(Neterror => {
          setNetError(Neterror.message);
          console.log(Neterror)

          
        })
        
      };


    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validate(values));
        setNetError('');
        if( errors && errors.errors.count === 0 )
        {
          getJwt();
        }
    }
    return {handleChanges , values , handleSubmit, errors, NetError}
}
export default useForm;