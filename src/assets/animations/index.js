import { keyframes } from 'styled-components';

export const rotate = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`;
export const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const pulse = (colors)=> keyframes `
    0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 ${colors.start};
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px ${colors.mid};
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 ${colors.final};
	}

`;

export const fadeIn = keyframes`
	0% {
		opacity:0;
	}
	100% {
		opacity:1;
	}
`;

export const fadeOut = keyframes`
	0% {
		opacity:1;
	}
	100% {
		opacity:0;
	}
`;