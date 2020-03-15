import { keyframes } from 'styled-components';

export const rotate = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`;