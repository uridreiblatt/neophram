import React ,{useContext} from 'react'
import Select from 'react-select'
import { FormContext } from './FormContext';

const MultiSelect = ({ field_id, field_label, field_placeholder, field_options }) => {
   
    
  const { handleChange } = useContext(FormContext);
     

    // const [selectedValue, SetselectedValue] = useState();
    // var HandleChange = (e) =>
    // {
    //     SetselectedValue  (Array.isArray(e)? e.map(f=>f.value) :[] );
    //     console.log(selectedValue);
    // }
    return (

        
        <div className="form-group">
            <label htmlFor={field_id}>{field_label}  </label>
            <Select className="form-control" options={field_options } isMulti={true}  onChange={event =>  handleChange(field_id, event)}
            placeholder={field_placeholder}></Select>
            <center style={{color:"blue"}}>
                
                {/* <b>Selected Parts</b>
                <h3 style={{color:"blue"}}>{selectedValue ? selectedValue +", " : null} </h3> */}

            </center>
        </div>       

    )
}

export  default MultiSelect

