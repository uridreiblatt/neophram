import React from 'react';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import ConfirmForm from './ConfirmForm';
const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value ,field_options} }) => {
    switch (field_type) {
        case 'text' :
            return (
                <Input
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_type={field_type}
                />);
        case 'email' :
            return (
                <Input
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_type={field_type}
                />);
        case 'select':
            return (
                <Select
                    field_id={field_id}
                    field_label={field_label}
                    field_type={field_type}
                    field_options={field_options}
                    field_value={field_value} />
            )
        case 'checkbox':
            return (<Checkbox
                field_id={field_id}
                field_label={field_label}
                field_type={field_type}
                field_value={field_value}
            />)
            case 'confirm':
                return (<ConfirmForm
                    field_id={field_id}
                    field_label={field_label}                   
                />)
        default:
            return null;
    }
}
export default Element