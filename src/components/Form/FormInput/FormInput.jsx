import React from 'react'
import { Input } from './styles';

const FormInput = ({ theme: themeProvider, placeholder, name, value, onChange:handleOnChange }) => {
    return (
        <Input
            theme={ themeProvider }
            placeholder={placeholder}
            name={name}
            onChange={handleOnChange}
            value={value}
        />
    )
}

export default FormInput;
