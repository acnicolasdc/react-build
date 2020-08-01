import React, { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import FormVertical from "components/Form/FormVertical";

function UserAuthentication({ onSuccess, onFailure, onComplete }) {
    const [fetchLoading, setFetchLoading] = useState(false);
    const [userData, setUserData] = useState({email:'', password:''});

    const onChangeForm = (e) => {
        let newProductInfo = {...userData};
        newProductInfo[e.target.name] = e.target.value;
        setUserData(newProductInfo);
    }
    const logInRequest = () => {
        setFetchLoading(true);
        if(userData.email === 'nico@dev.com' && userData.password === 'root'){
            setTimeout(()=> {
                setFetchLoading(false);
                onSuccess({ session: true, token:'miraEsteTokenTanSeguro'});
            },1000)
        }else{
            onFailure();
            setFetchLoading(false);
        }
    }

    return (
        <FormVertical
            render={[
                <FormVertical.Input
                    name='email'
                    placeholder='Email'
                    value={userData.email}
                    onChange={onChangeForm}
                />,
                <FormVertical.Input
                    name='password'
                    placeholder='password'
                    value={userData.password}
                    onChange={onChangeForm}
                />,
                <FormVertical.Button
                    title={fetchLoading?'Loading':'Sign in'}
                    disableIcon={!fetchLoading}
                    Icon={AiOutlineLoading}
                    onClick={logInRequest}
                    animation={true}
                />
            ]}
        />
    )
}

export default UserAuthentication;
