const LIGHT_MODE_HOUR_STAR = 6;
const LIGHT_MODE_HOUR_END = 48;
const DARK_MODE_HOUR_STAR = LIGHT_MODE_HOUR_END + 1;
const DARK_MODE_HOUR_END = 50;
export const timeManager=(time)=> {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if(minutes >= DARK_MODE_HOUR_STAR && minutes <= DARK_MODE_HOUR_END) return true;
    return false;
}