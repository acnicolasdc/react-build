import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 20px;
    width: 100%;
    height: 100vh;
    .login-container {
        text-align: center;
    };
    .title-login {
        color:${props => props.theme.titleColor};
        margin: 20px 0;
    }
`;