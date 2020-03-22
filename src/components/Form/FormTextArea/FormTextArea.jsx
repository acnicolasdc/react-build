import React from 'react'
import { TextArea } from './styles';

const FormTextArea = ({ theme: themeProvider, placeholder, name, value, onChange:handleOnChange }) => {
    return (
        <TextArea
            theme={ themeProvider }
            placeholder={placeholder}
            name={name}
            onChange={handleOnChange}
            value={value}
        />
    )
}

export default FormTextArea;
