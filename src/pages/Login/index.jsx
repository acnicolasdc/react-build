import React, { useContext } from 'react';
import { SessionContext } from 'providers/session';
import UserAuthentication from 'containers/User/UserAuthentication';
import { LoginContainer } from './styles';

function Login() {
    const { login } = useContext(SessionContext);
    const handlerLogin = (session)=>{
        login(session);
    }
    return (
        <LoginContainer>
            <div  className='login-container'>
                <h1 className='title-login' >Welcome to React Build</h1>
                <UserAuthentication
                    onSuccess={handlerLogin}
                />
            </div>
        </LoginContainer>
    )
}
export default Login;
