import {emailRegex} from '../Components/icons'
export default function validateinfo(uservalues) {
   
    
    
    
    let     errors = {}
    errors.count=0
        
    if (!uservalues.username.trim()){
        errors.errusername = "User name required"
        errors.count+=1
    }
    if (!uservalues.email.trim()){
        errors.erremail = "Email required"
        errors.count+=1
    }
    else if (!emailRegex.test(uservalues.email)){
        errors.erremail = "Invalid Email "
        errors.count+=1
    }
    if (!uservalues.password.trim()){
        errors.errpassword = "password required"
        errors.count+=1
    }
    else if (uservalues.password.length < 6){
        errors.errpassword = "password needs to b 6 characters or more"
        errors.count+=1
    }
   return {errors}
   

}



