import { useState, useMemo } from 'react';
import useInterval from 'hooks/useInterval';
import { getStorage } from 'utils/localStorage';
import { timeManager } from './timeManager';
import { SET_INTERVAL } from "./constants";

const useClock = (initialTime = new Date(), clockOn) => {
    const [time, setTime] = useState(initialTime);
    const isDark = getStorage('darkTheme');
    const isTime = timeManager(time);
    useInterval(() => {
        setTime(() => new Date());
    }, clockOn ? SET_INTERVAL : null);
    const response = useMemo(()=> {
        if(isDark === 'true' && !isTime) return false;
        if(isDark === 'false' && isTime) return true;
        return null
    },[isDark, isTime]);
    return response;
}

export default useClock;
