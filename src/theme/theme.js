const globalColor = {
    shinyBlue: '#32afa9',
    shinyYellow: '#f0cf85',
    disabledGray: 'rgba(113, 113, 113, 0.5)',
    dumbRed: '#e22d48'
}
// styles
export const lightTheme = {
    background:'#E0E5EC',
    secondBackground:'#FFF',
    titleColor: 'rgb(163,177,198,1)',
    textColor: 'rgb(163,177,198,0.8)',
    placeholderColor: 'rgb(163,177,198,0.6)',
    squaredShadow: '20px 20px 60px #bec3c9, -20px -20px 60px #ffffff',
    insetShadow: 'inset 20px 20px 60px #e0e5ec, inset -20px -20px 60px #ffffff',
    iconColorContrast: 'rgb(163,177,198,1)',
    ...globalColor
};

export const darkTheme = {
    background:'#3c3d3f',
    secondBackground:'#454648',
    titleColor: 'rgb(255,255,255,1)',
    textColor: 'rgb(255,255,255,0.8)',
    placeholderColor: 'rgb(255,255,255,0.6)',
    squaredShadow: '20px 20px 60px #333436, -20px -20px 60px #454648',
    insetShadow: 'inset 24px 24px 48px #333436, inset -24px -24px 48px #454648',
    iconColorContrast: '#FFF',
    ...globalColor
};

// border-radius: 50px;
// background: #3c3d3f;
// box-shadow:  20px 20px 60px #333436, 
//              -20px -20px 60px #454648;


// background: #E0E5EC;
// box-shadow:  20px 20px 60px #bec3c9, 
//              -20px -20px 60px #ffffff;