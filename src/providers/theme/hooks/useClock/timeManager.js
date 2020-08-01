import {
    HOUR_START_LIGHT_MODE,
    HOUR_END_LIGHT_MODE,
    HOUR_START_DARK_MODE,
    HOUR_END_DARK_MODE,
    MINUTES_END_MODES
} from './constants';

export const timeManager=(time)=> {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if(hours >= HOUR_START_LIGHT_MODE && hours < HOUR_END_LIGHT_MODE) return false;
    if(hours === HOUR_END_LIGHT_MODE && minutes <= MINUTES_END_MODES) return false;
    if(hours >= HOUR_START_DARK_MODE || hours < HOUR_END_DARK_MODE) return true;
    if(hours === HOUR_END_DARK_MODE && minutes <= MINUTES_END_MODES) return true;
    return false;
}