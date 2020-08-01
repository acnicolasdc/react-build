import React, { useState, useLayoutEffect } from 'react';
import { getStorage, setStorage, deleteStorage } from 'utils/localStorage';

export const SessionContext = React.createContext({
    session: false,
    logout: () => {},
    login: () => {},
});

function SessionProvider({ children }) {
    const [session, setSession] = useState(false);

    useLayoutEffect(() => {
        // logout();
        let userSession = getStorage('user-session');
        if(userSession) {
            userSession = JSON.parse(userSession);
            setSession(true);
        }
    }, [session]);

    const logout = () => {
        deleteStorage('user-session');
    };
    const login = (session) => {
        setStorage('user-session', JSON.stringify(session));
        setSession(true);
    };

    return (
        <SessionContext.Provider value={{ session, login, logout}}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider;
