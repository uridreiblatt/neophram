import React from 'react';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import ConfirmForm from './ConfirmForm';
import MultiSelect from './MultiSelect';
import Instructions from './Instructions';
import DataTable from './DataTable';

const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value ,field_options,field_disable,table_options} }) => {
    console.log(JSON.stringify(field_type))
    switch (field_type) {
        case 'table' :
            return (
                <DataTable
                    field_id={field_id}
                    field_label={field_label}                    
                    field_value={field_value}
                    field_type={field_type}
                    table_options={table_options}
                />);
        case 'text' :
            return (
                <Input
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_type={field_type}
                    field_disable={field_disable}
                />);
        

        case 'email' :
            return (
                <Input
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_type={field_type}
                    field_disable={field_disable}
                />);
        case 'select':
            return (
                <Select
                    field_id={field_id}
                    field_label={field_label}
                    field_type={field_type}
                    field_options={field_options}
                    field_value={field_value} />
            );
        case 'Multiselect':
            return(
            <MultiSelect 
            field_id={field_id}
            field_label={field_label}    
            field_placeholder={field_placeholder}       
            field_options={field_options}
           
            ></MultiSelect>

        );
        case 'checkbox':
            return (<Checkbox
                field_id={field_id}
                field_label={field_label}
                field_type={field_type}
                field_value={field_value}
            />);
            case 'confirm':
                return (<ConfirmForm
                    field_id={field_id}
                    field_label={field_label}                   
                />);
                case 'instructions':
                    return (<Instructions
                        field_id={field_id}
                        field_label={field_label}
                        field_type={field_type}
                        field_value={field_value}
                    />);
                
        default:
            return null;
    }
}
export default Element