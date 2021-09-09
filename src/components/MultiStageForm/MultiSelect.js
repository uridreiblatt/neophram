import React, {useState} from 'react'
import Select from 'react-select'

const MultiSelect = ({ field_id, field_label, field_placeholder, field_value,field_type,field_disable }) => {
    var prepEquipment =  [
        {
            label: "B-0001 VANCOMYCIN 61447",
            PARTNAME: "B-0001",
            PARTDES: "ALCOXIDINE 300 ML",
            INACTIVE: null,
            value: 61447
        },
        {
            label: "Z-0008 VANCOMYCIN 63950",
            PARTNAME: "Z-0008",
            PARTDES: "CEFAMEZINE",
            INACTIVE: null,
            value: 63950
        },
        {
            label: "Z-0009 VANCOMYCIN 63951",
            PARTNAME: "Z-0009",
            PARTDES: "VANCOMYCIN",
            INACTIVE: null,
            value: 63951
        }
        ,
        {
            label: "Z-0010 6395110",
            PARTNAME: "Z-0010",
            PARTDES: "VANCOMYCIN",
            INACTIVE: null,
            value: 6395110
        }
        ,
        {
            label: "Z-0011 6395111",
            PARTNAME: "Z-0011",
            PARTDES: "VANCOMYCIN",
            INACTIVE: null,
            value: 6395111
        }
        ,
        {
            label: "Z-0012 VANCOMYCIN 6395112",
            PARTNAME: "Z-0012",
            PARTDES: "VANCOMYCIN",
            INACTIVE: null,
            value: 6395112
        }
    ]; 

    const [selectedValue, SetselectedValue] = useState();
    var HandleChange = (e) =>
    {
        SetselectedValue  (Array.isArray(e)? e.map(f=>f.label) :[] );
        console.log(selectedValue);
    }
    return (


        <div className="form-group">
            <label htmlFor={field_id}>{field_label}  </label>
            <Select className="form-control" options={prepEquipment} isMulti={true} onChange={HandleChange} placeholder={field_placeholder}></Select>
            {/* <center style={{color:"blue"}}>
                
                <b>Selected Parts</b>
                <h3 style={{color:"blue"}}>{selectedValue ? selectedValue +", " : null} </h3>

            </center> */}
        </div>
       

// <select   className="form-control"  style={{color:"red"}} onChange={event => 
//                 handleChange(field_id, event)}>
//                 <option>Default select</option>
//                 {field_options.length > 0 && field_options.map(
//                     (option, i) => <option key={i} value={option.option_label}>{option.option_label} </option>)}
//             </select>

    )
}

export  default MultiSelect

