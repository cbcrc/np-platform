import { colorRed, colorTextBlue, colorTextGrey } from "./color"
import { ArrowShiftDown, TrashCan } from '@carbon/icons-react';

export function IconCircleCheck() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <g clipPath="url(#clip0_1102_4883)">
            <circle cx="7" cy="7" r="5" fill="#0F0F0F"/>
            <path d="M7 0C5.61553 0 4.26216 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303298 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM6 9.795L3.5 7.295L4.295 6.5L6 8.205L9.705 4.5L10.503 5.293L6 9.795Z" fill="#CDE1FF"/>
        </g>
        <defs>
            <clipPath id="clip0_1102_4883">
            <rect width="14" height="14" fill="white"/>
            </clipPath>
        </defs>
    </svg>
}

export function IconUpvote({ color=colorTextGrey }) {
    return <ArrowShiftDown style={{ transform: 'rotate(180deg)', fill: color }} />
}

export function IconUpvoted({color=colorTextBlue}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4.50011 8L4.50011 13C4.5005 13.2651 4.60599 13.5192 4.79344 13.7067C4.98089 13.8941 5.23501 13.9996 5.50011 14L10.5001 14C10.7652 13.9997 11.0194 13.8943 11.2069 13.7068C11.3944 13.5193 11.4998 13.2651 11.5001 13L11.5001 8L14.0001 8C14.099 7.99998 14.1956 7.97064 14.2778 7.9157C14.36 7.86076 14.4241 7.78268 14.4619 7.69133C14.4998 7.59998 14.5097 7.49946 14.4904 7.40248C14.4711 7.30551 14.4235 7.21643 14.3536 7.1465L8.35361 1.1465C8.25984 1.05276 8.13269 1.00011 8.00011 1.00011C7.86753 1.00011 7.74037 1.05276 7.64661 1.1465L1.64661 7.1465C1.5767 7.21642 1.5291 7.30551 1.50982 7.40248C1.49053 7.49946 1.50043 7.59998 1.53827 7.69133C1.5761 7.78268 1.64017 7.86076 1.72238 7.9157C1.80458 7.97064 1.90123 7.99998 2.00011 8L4.50011 8Z" fill={color}/>
    </svg>
}

export function DeleteIcon() {
    return <TrashCan style={{fill: colorRed}} />
}
