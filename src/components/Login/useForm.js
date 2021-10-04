import {useState} from 'react'
import api from '../../Api/api'






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