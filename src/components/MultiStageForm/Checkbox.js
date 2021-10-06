import React, { useContext } from 'react'
import { FormContext } from './FormContext';
const Checkbox = ({ field_id,
    field_label,
    field_value }) => {
    const { handleChange } = useContext(FormContext);
    return (
        <div className="form-group">
            <input type="checkbox" style={{color:"black"}} className="form-check-input" id="exampleCheck1" checked={field_value} 
            onChange={(event) => handleChange(field_id, event)} />
            <label className="form-check-label" htmlFor="exampleCheck1">{field_label}</label>
        </div>
    )
}
export default Checkbox