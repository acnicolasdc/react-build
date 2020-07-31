import React, {useState} from 'react'
import ButtonRadioGroup from '../../../../components/Button/ButtonRadioGroup';
import CardRadioOption from './components/CardRadioOption'

export default function Override() {
    const [selected, setSelected] = useState("first");
    const [selected2, setSelected2] = useState("us");
    return (
        <div>
            <h1>Hello Override</h1>
            <div style={{width:'100%', display: 'flex', justifyContent: 'center'}}>
            <ButtonRadioGroup 
                check={selected}
                onChange={setSelected}
                options={[{ name:'defaultRadio', value:'defaultValue', option:'House'}, { name:'radio2', value:'radio2', option:'Apartment'},
                { name:'radio3', value:'radio3', option:'Nicolás'}]}
            />
            <ButtonRadioGroup
                check={selected2}
                onChange={setSelected2}
                overrides={{
                    RadioButtonLabel:{
                        component:({$style, ...props})=><button
                        {...props}
                        style={{...$style}}
                        > Mas informacion </button>,
                        style:{
                            color:'red',
                            marginTop: '10px'
                        },
                        props:{
                            onClick:()=> alert('bienvenido a Lean-Tech')
                        }
                    },
                    Root:{
                        style:{
                            flexDirection:'row'
                        }
                    },
                    RadioButton:{
                        component:CardRadioOption
                    },
                    RadioContainer:{
                        style:{
                            flexDirection:'column'
                        }
                    }
                }}
                options={[{ name:'us', value:'appleus', option:'Apple US'}, { name:'col', value:'applecol', option:'Apple Colombia'},
                { name:'mx', value:'applemx', option:'Apple Mexico'}]}
            />
            </div>
        </div>
    )
}