import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
const Input = ({ field_id, field_label, field_placeholder, field_value,field_type }) => {
    const { handleChange } = useContext(FormContext);
    return (
        <div className="form-group ">
        <label htmlFor="exampleInputEmail1">{field_label}</label>
        <input type={field_type} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder={field_placeholder ? field_placeholder : ' '}
        value={field_value}
        name="field_value"
        onChange={event => handleChange(field_id, event)}
        />
        </div>
    )
}
export default Input