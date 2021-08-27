import React, { useContext } from 'react'
import { FormContext } from './FormContext';
const ConfirmForm = ({ field_id, field_label, field_options }) => {
    const { handleSubmit } = useContext(FormContext);
    return (
        <div className="form-group">
            <h3>Confirm</h3>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Confirm</button> 
            
        </div>
    )
}
export default ConfirmForm