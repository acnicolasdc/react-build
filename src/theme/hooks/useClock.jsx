import { useEffect, useState, useMemo } from 'react';
import { getStorage } from 'utils/localStorage';

const LIGHT_MODE_HOUR_STAR = 6;
const LIGHT_MODE_HOUR_END = 13;
const DARK_MODE_HOUR_STAR = LIGHT_MODE_HOUR_END + 1;
const DARK_MODE_HOUR_END = 14;

const useClock = (initialTime = new Date(), clockOn) => {
    const [time, setTime] = useState(initialTime);
    const isDark = getStorage('darkTheme');
    const isTime = timeManager(time);
    useEffect(() => {
        if(clockOn) {
            const id = setInterval(() => {
                setTime(() => new Date());
            }, 1000);
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

const timeManager=(time)=> {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if(minutes >= DARK_MODE_HOUR_STAR && minutes <= DARK_MODE_HOUR_END) return true;
    return false;
}

export default useClock;