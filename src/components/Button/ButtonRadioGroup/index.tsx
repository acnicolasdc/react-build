import React from 'react'
import * as defaultComponents from './styles';
import { DefaultComponents, Options, OverrideComponents} from './utils/types';

const OPTIONS = [{ name:'defaultRadio', value:'defaultValue', option:'House'}];
const ON_CHANGE = () => (false);
export interface ButtonRadioGroupProps {
    overrides?: DefaultComponents;
    options: Array<Options>;
    onChange: (name: string) => void;
    check: string;
};

function getComponents(defaultComponents: DefaultComponents, overrides: DefaultComponents): object{
    return Object.keys(defaultComponents).reduce((acc: any, name: string)=>{
        const override: OverrideComponents = overrides[name] || {};
        const component: React.ComponentType<any> = override.component || defaultComponents[name];
        acc[name] = {
            component: component,
            props: { $style: override.style, ...override.props},
        };
        return acc;
    }, {})
}

function getStatus(check: string, name:string): boolean {
    if(check === name) return true;
    return false;
}

const ButtonRadioGroup: React.FunctionComponent<ButtonRadioGroupProps> = ({ overrides = {}, options = OPTIONS, check = '', onChange = ON_CHANGE}) => {
    const {
        RadioContainer: { component: RadioContainer, props: radioContainerProps},
        RadioButtonLabel: { component: RadioButtonLabel, props: radioButtonLabelProps},
        RadioButton: { component: RadioButton, props: radioButtonProps},
        Root: { component: Root, props: rootProps}
    }: DefaultComponents = getComponents(defaultComponents, overrides);

    return (
        <Root {...rootProps}>
            {options?.map(({ name, value, option}:Options)=>(
                <RadioContainer key={value} {...radioContainerProps}>
                        <RadioButton
                            $name={name}
                            $value={value}
                            $isChecked={getStatus(check, name)}
                            onClick={()=> onChange(name)}
                            {...radioButtonProps}
                        />
                    <RadioButtonLabel {...radioButtonLabelProps}>{option}</RadioButtonLabel>
                </RadioContainer>
            ))}
        </Root>
    )
}

export default React.memo(ButtonRadioGroup)
