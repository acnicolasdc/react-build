import { useEffect, useState, useMemo } from 'react';
import { getStorage } from 'utils/localStorage';
import { timeManager } from './timeManager';

const useClock = (initialTime = new Date(), clockOn) => {
    const [time, setTime] = useState(initialTime);
    const isDark = getStorage('darkTheme');
    const isTime = timeManager(time);
    useEffect(() => {
        if(clockOn) {
            const id = setInterval(() => {
                setTime(() => new Date());
            }, 10000);
            return () => clearInterval(id);
        }
    }, [clockOn]);
    const response = useMemo(()=> {
        if(isDark === 'true' && !isTime) return false;
        if(isDark === 'false' && isTime) return true;
        return null
    },[isDark, isTime]);
    return response;
}

export default useClock;
