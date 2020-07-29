import React from 'react'
import ButtonRadioGroup from '../../../../components/Button/ButtonRadioGroup'

export default function Override() {
    return (
        <div>
            <h1>Hello Override</h1>
            <div style={{width:'100%', display: 'flex', justifyContent: 'center'}}>
            <ButtonRadioGroup 
                options={[{ name:'defaultRadio', value:'defaultValue', option:'House'}, { name:'radio2', value:'radio2', option:'Apartment'}]}
            />
                <ButtonRadioGroup 
                overrides={{
                    RadioButtonLabel:{
                        component: ({...restProps})=><button {...restProps}>more information</button>,
                        props: {onClick:()=> alert('Este es mi primer radio button')},
                    },
                }}
                options={[{ name:'defaultRadio3', value:'defaultValue3', option:'House3'}, { name:'radio23', value:'radio23', option:'Apartment3'}]}
            />

            </div>
        </div>
    )
}
