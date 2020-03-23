import React from 'react'
import { ProgressCircleLoader } from './styles';

const ProgressCircle = ({ size, ...restProps }) => {
    return (
        <ProgressCircleLoader {...restProps} size={ size }/>
    )
}

export default ProgressCircle;
