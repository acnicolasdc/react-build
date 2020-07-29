import React from 'react'
import * as defaultComponents from './styles';

function getComponents(defaultComponents, overrides){
    return Object.keys(defaultComponents).reduce((acc, name)=>{
        const override = overrides[name] || {};
        acc[name] = {
            component: override.component || defaultComponents[name],
            props: { $style: override.style, ...override.props},
        };
        console.log(acc);
        return acc;
    }, {})
}

const ButtonRadioGroup = ({ overrides, options}) => {
    const {
        RadioContainer: { component: RadioContainer, props: radioContainerProps},
        RadioButtonLabel: { component: RadioButtonLabel, props: radioButtonLabelProps},
        RadioButton: { component: RadioButton, props: radioButtonProps},
        Root: { component: Root, props: rootProps}
    } = getComponents(defaultComponents, overrides)
    return (
        <Root>
            {options?.map(({ name, value})=>(
                <RadioContainer key={value}>
                    <RadioButton
                        type="radio"
                        name={name}
                        value={value}
                    />
                    <RadioButtonLabel />
                </RadioContainer>
            ))}
        </Root>
    )
}

ButtonRadioGroup.defaultProps = {
    overrides:{},
    options:[{ name:'defaultRadio', value:'defaultValue'}],
}

export default ButtonRadioGroup
