import { keyframes } from 'styled-components'

export const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
`;

export const rotate = keyframes`
    100% {
        transform: rotateZ(360deg); 
    }
`;

export const arrowAni = keyframes`
    0% { opacity:0; transform: translateY(-50px); }	
   20% { opacity:1; transform: translateY(-10px); }	
   80% { opacity:1; transform: translateY(10px); }	
  100% { opacity:0; transform: translateY(50px); }	
`;

export const slide = keyframes`
    0% { opacity:0; transform: translateY(-100px); }	
    25% { opacity:0.5; transform: translateY(-50px); }	
    50% { opacity:1; transform: translateY(0px); }	
    75% { opacity:0.5; transform: translateY(50px); }	
    100% { opacity:0; transform: translateY(100px); }	
`;

export const phoneSlide = keyframes`
    0% { opacity:0; transform: translateY(-50px); }	
    25% { opacity:0.5; transform: translateY(0px); }	
    50% { opacity:1; transform: translateY(50px); }	
    75% { opacity:0.5; transform: translateY(100px); }	
    100% { opacity:0; transform: translateY(150px); }	
`;

export const floatingText = keyframes`
    0% {  
      transform: translateY(.05em);
  
    }
    100% {
        transform: translateY(0);
    }	
`;
