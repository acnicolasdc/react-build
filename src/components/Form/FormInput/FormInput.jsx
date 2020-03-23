import React from 'react'
import { Input } from './styles';

const FormInput = ({ placeholder, name, value, onChange:handleOnChange, ...restProps }) => {
    return (
        <Input
            {...restProps}
            placeholder={placeholder}
            name={name}
            onChange={handleOnChange}
            value={value}
        />
    )
}

export default FormInput;
