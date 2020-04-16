import React, { useState, useLayoutEffect } from 'react';

export const SessionContext = React.createContext({
    session: false,
    logout: () => {},
    login: () => {},
});

function SessionProvider({ children }) {
    const [session, setSession] = useState(false);

    useLayoutEffect(() => {
        const cookieSession = 'true';
        const isSession = cookieSession === 'true';
        setSession(isSession);
    }, [session]);

    const logout = () => {};
    const login = () => {};

    return (
        <SessionContext.Provider value={{ session, login, logout}}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider;
