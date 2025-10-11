import React from 'react';

export const MastercardLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 24" width="38" height="24" {...props}>
        <path fill="#EA001B" d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24z" />
        <path fill="#F79E1B" d="M26 12c0 6.6-5.4 12-12 12S2 18.6 2 12 7.4 0 14 0s12 5.4 12 12z" opacity="0.8" />
    </svg>
);
