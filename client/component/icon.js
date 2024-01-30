import { colorTextBlue } from "./color"

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

export function IconReply({color = 'black'}) {
    return  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clipPath="url(#clip0_1104_6046)">
            <path d="M14.44 15.0001C14.351 15.0013 14.2634 14.9788 14.186 14.9348C14.1087 14.8909 14.0444 14.8271 14 14.7501C13.334 13.6156 12.3849 12.6736 11.2455 12.0162C10.106 11.3589 8.8154 11.0087 7.49997 11.0001V14.0001C7.49948 14.0988 7.46978 14.1951 7.41461 14.277C7.35944 14.3589 7.28128 14.4226 7.18997 14.4601C7.09891 14.4984 6.99856 14.5088 6.90156 14.4901C6.80457 14.4714 6.71528 14.4244 6.64497 14.3551L0.644969 8.35507C0.598105 8.30859 0.560908 8.25329 0.535524 8.19236C0.510139 8.13143 0.49707 8.06608 0.49707 8.00007C0.49707 7.93406 0.510139 7.86871 0.535524 7.80778C0.560908 7.74685 0.598105 7.69155 0.644969 7.64507L6.64497 1.64507C6.71528 1.57569 6.80457 1.52869 6.90156 1.51001C6.99856 1.49132 7.09891 1.50178 7.18997 1.54007C7.28128 1.57758 7.35944 1.64128 7.41461 1.72314C7.46978 1.805 7.49948 1.90136 7.49997 2.00007V5.05507C9.56857 5.32076 11.47 6.32954 12.8499 7.8934C14.2297 9.45725 14.9939 11.4695 15 13.5551C14.9988 13.8894 14.9771 14.2234 14.935 14.5551C14.9225 14.6591 14.8776 14.7566 14.8068 14.8337C14.7359 14.9109 14.6426 14.9638 14.54 14.9851L14.44 15.0001ZM7.24997 10.0001C8.52517 9.98176 9.78915 10.2405 10.9546 10.7585C12.12 11.2764 13.159 12.0413 14 13.0001C13.8495 11.1863 13.0578 9.48539 11.7667 8.20256C10.4756 6.91973 8.76971 6.13887 6.95497 6.00007C6.83031 5.98881 6.71441 5.93119 6.63016 5.83862C6.54592 5.74604 6.49946 5.62524 6.49997 5.50007V3.20507L1.70497 8.00007L6.49997 12.7951V10.5001C6.49997 10.3675 6.55265 10.2403 6.64642 10.1465C6.74018 10.0527 6.86736 10.0001 6.99997 10.0001H7.26997H7.24997Z" fill={color} />
        </g>
        <defs>
            <clipPath id="clip0_1104_6046">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
        </defs>
    </svg>
}

export function IconComment({color = 'black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8.87 15L8 14.5L10 11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10V4C14 3.73478 13.8946 3.48043 13.7071 3.29289C13.5196 3.10536 13.2652 3 13 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H7.5V12H3C2.46957 12 1.96086 11.7893 1.58579 11.4142C1.21071 11.0391 1 10.5304 1 10V4C1 3.46957 1.21071 2.96086 1.58579 2.58579C1.96086 2.21071 2.46957 2 3 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V10C15 10.5304 14.7893 11.0391 14.4142 11.4142C14.0391 11.7893 13.5304 12 13 12H10.58L8.87 15Z" fill={color} />
        <path d="M4 5H12V6H4V5ZM4 8H9V9H4V8Z" fill={color}/>
    </svg>
}

export function IconImage() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
       <path d="M9.5 7C9.79667 7 10.0867 6.91203 10.3334 6.74721C10.58 6.58238 10.7723 6.34811 10.8858 6.07403C10.9994 5.79994 11.0291 5.49834 10.9712 5.20737C10.9133 4.91639 10.7704 4.64912 10.5607 4.43934C10.3509 4.22956 10.0836 4.0867 9.79264 4.02882C9.50166 3.97094 9.20006 4.00065 8.92597 4.11418C8.65189 4.22771 8.41762 4.41997 8.2528 4.66665C8.08797 4.91332 8 5.20333 8 5.5C8 5.89783 8.15804 6.27936 8.43934 6.56066C8.72064 6.84197 9.10218 7 9.5 7ZM9.5 5C9.59889 5 9.69556 5.02933 9.77779 5.08427C9.86001 5.13921 9.9241 5.2173 9.96194 5.30866C9.99978 5.40002 10.0097 5.50056 9.99039 5.59755C9.9711 5.69454 9.92348 5.78363 9.85355 5.85355C9.78363 5.92348 9.69454 5.9711 9.59755 5.99039C9.50056 6.00969 9.40002 5.99978 9.30866 5.96194C9.2173 5.9241 9.13921 5.86001 9.08426 5.77779C9.02932 5.69556 9 5.59889 9 5.5C9 5.36739 9.05268 5.24022 9.14645 5.14645C9.24021 5.05268 9.36739 5 9.5 5Z" fill="black"/>
        <path d="M13 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM13 13H3V10L5.5 7.5L8.295 10.295C8.48236 10.4813 8.73581 10.5858 9 10.5858C9.26419 10.5858 9.51764 10.4813 9.705 10.295L10.5 9.5L13 12V13ZM13 10.585L11.205 8.79C11.0176 8.60375 10.7642 8.49921 10.5 8.49921C10.2358 8.49921 9.98236 8.60375 9.795 8.79L9 9.585L6.205 6.79C6.01764 6.60375 5.76419 6.49921 5.5 6.49921C5.23581 6.49921 4.98236 6.60375 4.795 6.79L3 8.585V3H13V10.585Z" fill="black"/>
    </svg>
}

export function IconAudio() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M9 15V14C10.3256 13.9985 11.5966 13.4713 12.5339 12.5339C13.4713 11.5966 13.9985 10.3256 14 9H15C14.9983 10.5908 14.3656 12.1159 13.2407 13.2407C12.1159 14.3656 10.5908 14.9983 9 15Z" fill="black"/>
        <path d="M9 13V12C9.79537 11.9991 10.5579 11.6827 11.1203 11.1203C11.6827 10.5579 11.9991 9.79537 12 9H13C12.9987 10.0605 12.5768 11.0771 11.827 11.827C11.0771 12.5768 10.0605 12.9987 9 13Z" fill="black"/>
        <path d="M9 11V10C9.26513 9.99973 9.51934 9.89429 9.70681 9.70681C9.89429 9.51934 9.99973 9.26513 10 9H11C10.9995 9.53027 10.7886 10.0387 10.4136 10.4136C10.0387 10.7886 9.53027 10.9995 9 11ZM5 1C3.80693 1.00132 2.66311 1.47585 1.81948 2.31948C0.975854 3.16311 0.501323 4.30693 0.5 5.5H1.5C1.5 4.57174 1.86875 3.6815 2.52513 3.02513C3.1815 2.36875 4.07174 2 5 2C5.92826 2 6.8185 2.36875 7.47487 3.02513C8.13125 3.6815 8.5 4.57174 8.5 5.5C8.50179 6.1197 8.3411 6.72904 8.03396 7.26727C7.72681 7.8055 7.28394 8.25381 6.7495 8.5675L6.5 8.7115V10.248C6.50245 10.4485 6.46378 10.6474 6.38639 10.8324C6.30899 11.0173 6.19451 11.1845 6.05 11.3235C5.76155 11.634 5.38557 11.8495 4.97188 11.9414C4.55819 12.0334 4.12632 11.9975 3.7335 11.8385C3.37319 11.6827 3.06531 11.4265 2.84659 11.1005C2.62788 10.7745 2.50756 10.3925 2.5 10H1.5C1.50901 10.5871 1.68684 11.1591 2.01224 11.6478C2.33763 12.1365 2.79684 12.5213 3.335 12.756C3.69981 12.9158 4.09371 12.9986 4.492 12.999C5.33139 12.9813 6.13232 12.6436 6.731 12.055C6.97592 11.8224 7.17054 11.542 7.3028 11.2312C7.43507 10.9204 7.50219 10.5858 7.5 10.248V9.277C8.11693 8.85911 8.62189 8.29621 8.97059 7.63769C9.31929 6.97917 9.50108 6.24514 9.5 5.5C9.49868 4.30693 9.02415 3.16311 8.18052 2.31948C7.33689 1.47585 6.19307 1.00132 5 1Z" fill="black"/>
        <path d="M4.64 4.04101C4.86115 3.98693 5.0917 3.9838 5.31424 4.03186C5.53678 4.07991 5.74549 4.1779 5.92463 4.31841C6.10376 4.45892 6.24863 4.6383 6.34831 4.84299C6.44798 5.04768 6.49985 5.27234 6.5 5.50001H7.5C7.50081 5.12409 7.41648 4.75287 7.25334 4.41419C7.09019 4.07552 6.85247 3.77819 6.558 3.54451C6.26032 3.30863 5.91318 3.14308 5.54252 3.06022C5.17187 2.97737 4.78728 2.97934 4.4175 3.06601C3.96663 3.17063 3.55413 3.39958 3.22685 3.72686C2.89957 4.05415 2.67062 4.46664 2.566 4.91751C2.44467 5.43576 2.49082 5.97915 2.69782 6.46951C2.90482 6.95988 3.262 7.37197 3.718 7.64651C3.95176 7.77853 4.14692 7.9694 4.2841 8.20017C4.42128 8.43094 4.49571 8.69358 4.5 8.96201V10H5.5V8.96151C5.49649 8.52013 5.37756 8.08734 5.15504 7.70614C4.93251 7.32493 4.61412 7.00859 4.2315 6.78851C3.97554 6.63626 3.77067 6.41131 3.64293 6.14229C3.51519 5.87326 3.47037 5.57231 3.51417 5.27774C3.55797 4.98317 3.6884 4.70828 3.88888 4.48805C4.08936 4.26782 4.35082 4.11221 4.64 4.04101Z" fill="black"/>
    </svg>
}

export function IconVideo() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10.5 13H2C1.73478 13 1.48043 12.8946 1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12V4C1 3.73478 1.10536 3.48043 1.29289 3.29289C1.48043 3.10536 1.73478 3 2 3H10.5C10.7652 3 11.0196 3.10536 11.2071 3.29289C11.3946 3.48043 11.5 3.73478 11.5 4V6.03L14.21 4.095C14.2846 4.04187 14.3724 4.01025 14.4638 4.00362C14.5552 3.99698 14.6466 4.01557 14.7281 4.05737C14.8096 4.09916 14.8781 4.16254 14.926 4.2406C14.974 4.31866 14.9996 4.40839 15 4.5V11.5C14.9996 11.5916 14.974 11.6813 14.926 11.7594C14.8781 11.8375 14.8096 11.9008 14.7281 11.9426C14.6466 11.9844 14.5552 12.003 14.4638 11.9964C14.3724 11.9897 14.2846 11.9581 14.21 11.905L11.5 9.97V12C11.5 12.2652 11.3946 12.5196 11.2071 12.7071C11.0196 12.8946 10.7652 13 10.5 13ZM2 4V12H10.5V9C10.5004 8.90839 10.526 8.81866 10.574 8.7406C10.6219 8.66254 10.6904 8.59916 10.7719 8.55737C10.8534 8.51557 10.9448 8.49698 11.0362 8.50362C11.1276 8.51025 11.2154 8.54187 11.29 8.595L14 10.53V5.47L11.29 7.405C11.2154 7.45813 11.1276 7.48975 11.0362 7.49638C10.9448 7.50302 10.8534 7.48443 10.7719 7.44263C10.6904 7.40084 10.6219 7.33746 10.574 7.2594C10.526 7.18134 10.5004 7.09161 10.5 7V4H2Z" fill="black"/>
    </svg>
}

export function IconEmoji() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19974 1.88378 7.99334 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C14 9.5913 13.3679 11.1174 12.2426 12.2426C11.1174 13.3679 9.5913 14 8 14Z" fill="black"/>
        <path d="M5.75 5.50004C5.50277 5.50004 5.2611 5.57335 5.05554 5.7107C4.84998 5.84806 4.68976 6.04328 4.59515 6.27169C4.50054 6.50009 4.47579 6.75143 4.52402 6.9939C4.57225 7.23638 4.6913 7.45911 4.86612 7.63392C5.04093 7.80874 5.26366 7.92779 5.50614 7.97602C5.74861 8.02425 5.99995 7.9995 6.22836 7.90489C6.45676 7.81028 6.65199 7.65006 6.78934 7.4445C6.92669 7.23894 7 6.99727 7 6.75004C7.00133 6.58552 6.96991 6.42237 6.90756 6.27011C6.84522 6.11786 6.75319 5.97953 6.63685 5.86319C6.52051 5.74685 6.38219 5.65482 6.22993 5.59248C6.07767 5.53013 5.91452 5.49871 5.75 5.50004ZM10.25 5.50004C10.0028 5.50004 9.7611 5.57335 9.55554 5.7107C9.34998 5.84806 9.18976 6.04328 9.09515 6.27169C9.00054 6.50009 8.97579 6.75143 9.02402 6.9939C9.07225 7.23638 9.1913 7.45911 9.36612 7.63392C9.54093 7.80874 9.76366 7.92779 10.0061 7.97602C10.2486 8.02425 10.4999 7.9995 10.7284 7.90489C10.9568 7.81028 11.152 7.65006 11.2893 7.4445C11.4267 7.23894 11.5 6.99727 11.5 6.75004C11.5013 6.58552 11.4699 6.42237 11.4076 6.27011C11.3452 6.11786 11.2532 5.97953 11.1369 5.86319C11.0205 5.74685 10.8822 5.65482 10.7299 5.59248C10.5777 5.53013 10.4145 5.49871 10.25 5.50004ZM8 12C8.69019 11.9989 9.36833 11.8191 9.96849 11.4783C10.5687 11.1375 11.0704 10.6472 11.425 10.055L10.57 9.55504C10.3032 9.99814 9.92631 10.3647 9.476 10.6192C9.0257 10.8737 8.51724 11.0074 8 11.0074C7.48276 11.0074 6.97431 10.8737 6.524 10.6192C6.07369 10.3647 5.69683 9.99814 5.43 9.55504L4.575 10.055C4.92958 10.6472 5.43135 11.1375 6.03151 11.4783C6.63168 11.8191 7.30982 11.9989 8 12Z" fill="black"/>
    </svg>
}

export function IconEdit({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1 13H15V14H1V13ZM12.7 4.5C13.1 4.1 13.1 3.5 12.7 3.1L10.9 1.3C10.5 0.9 9.9 0.9 9.5 1.3L2 8.8V12H5.2L12.7 4.5ZM10.2 2L12 3.8L10.5 5.3L8.7 3.5L10.2 2ZM3 11V9.2L8 4.2L9.8 6L4.8 11H3Z" fill={color}/>
    </svg>
}

export function IconEditBig({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M1.5 19.5H22.5V21H1.5V19.5ZM19.05 6.75C19.65 6.15 19.65 5.25 19.05 4.65L16.35 1.95C15.75 1.35 14.85 1.35 14.25 1.95L3 13.2V18H7.8L19.05 6.75ZM15.3 3L18 5.7L15.75 7.95L13.05 5.25L15.3 3ZM4.5 16.5V13.8L12 6.3L14.7 9L7.2 16.5H4.5Z" fill={color}/>
    </svg>
}

export function IconSave() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12 2V13.375L8.45 11.58L8 11.355L7.55 11.58L4 13.375V2H12ZM12 1H4C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V15L8 12.5L13 15V2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1Z" fill="black"/>
    </svg>
}

export function IconUpvote({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4.50011 13L4.50011 8L2.00011 8C1.90123 7.99998 1.80458 7.97064 1.72238 7.9157C1.64017 7.86076 1.5761 7.78268 1.53827 7.69133C1.50043 7.59998 1.49053 7.49946 1.50982 7.40248C1.5291 7.30551 1.5767 7.21642 1.64661 7.1465L7.64661 1.1465C7.74037 1.05276 7.86753 1.00011 8.00011 1.00011C8.13269 1.00011 8.25984 1.05276 8.35361 1.1465L14.3536 7.1465C14.4235 7.21643 14.4711 7.30551 14.4904 7.40248C14.5097 7.49946 14.4998 7.59998 14.4619 7.69133C14.4241 7.78268 14.36 7.86076 14.2778 7.9157C14.1956 7.97064 14.099 7.99998 14.0001 8L11.5001 8L11.5001 13C11.4998 13.2651 11.3944 13.5193 11.2069 13.7068C11.0194 13.8943 10.7652 13.9997 10.5001 14L5.50011 14C5.23501 13.9996 4.98089 13.8941 4.79344 13.7067C4.60599 13.5192 4.5005 13.2651 4.50011 13ZM8.00011 2.207L3.20711 7L5.50011 7L5.50011 13L10.5001 13L10.5001 7L12.7931 7L8.00011 2.207Z" fill={color}/>
    </svg>
}

export function IconUpvoted({color=colorTextBlue}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4.50011 8L4.50011 13C4.5005 13.2651 4.60599 13.5192 4.79344 13.7067C4.98089 13.8941 5.23501 13.9996 5.50011 14L10.5001 14C10.7652 13.9997 11.0194 13.8943 11.2069 13.7068C11.3944 13.5193 11.4998 13.2651 11.5001 13L11.5001 8L14.0001 8C14.099 7.99998 14.1956 7.97064 14.2778 7.9157C14.36 7.86076 14.4241 7.78268 14.4619 7.69133C14.4998 7.59998 14.5097 7.49946 14.4904 7.40248C14.4711 7.30551 14.4235 7.21643 14.3536 7.1465L8.35361 1.1465C8.25984 1.05276 8.13269 1.00011 8.00011 1.00011C7.86753 1.00011 7.74037 1.05276 7.64661 1.1465L1.64661 7.1465C1.5767 7.21642 1.5291 7.30551 1.50982 7.40248C1.49053 7.49946 1.50043 7.59998 1.53827 7.69133C1.5761 7.78268 1.64017 7.86076 1.72238 7.9157C1.80458 7.97064 1.90123 7.99998 2.00011 8L4.50011 8Z" fill={color}/>
    </svg>
}

export function IconReport({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 15H2V1H14L11.1 5.5L14 10H3V15ZM3 9H12.165L9.9 5.5L12.165 2H3V9Z" fill={color} />
    </svg>
}

export function IconChevronDown({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 13.75L3.75 7.5L4.625 6.625L10 12L15.375 6.625L16.25 7.5L10 13.75Z" fill={color}/>
    </svg>
}

export function IconChevronUp({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
       <path d="M10 6.25L16.25 12.5L15.375 13.375L10 8L4.625 13.375L3.75 12.5L10 6.25Z" fill={color}/>
    </svg>
}

export function IconChevronUpSmall({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 5.00001L13 10L12.3 10.7L8 6.40001L3.7 10.7L3 10L8 5.00001Z" fill={color}/>
    </svg>
}

export function IconChevronDownSmall({color='black'}){
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 11L3 6L3.7 5.3L8 9.6L12.3 5.3L13 6L8 11Z" fill={color}/>
    </svg>
}

export function IconClose({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill={color} />
    </svg>
}

export function IconCloseBig({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4L14.6 16L8 22.6L9.4 24L16 17.4L22.6 24L24 22.6L17.4 16L24 9.4Z" fill={color}/>
    </svg>
}

export function IconLeftArrowBig({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M14 26L15.41 24.59L7.83 17H28V15H7.83L15.41 7.41L14 6L4 16L14 26Z" fill={color} />
    </svg>
}

export function IconCommentBig({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13.305 22.5L12 21.75L15 16.5H19.5C19.8978 16.5 20.2794 16.342 20.5607 16.0607C20.842 15.7794 21 15.3978 21 15V6C21 5.60218 20.842 5.22064 20.5607 4.93934C20.2794 4.65804 19.8978 4.5 19.5 4.5H4.5C4.10218 4.5 3.72064 4.65804 3.43934 4.93934C3.15804 5.22064 3 5.60218 3 6V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H11.25V18H4.5C3.70435 18 2.94129 17.6839 2.37868 17.1213C1.81607 16.5587 1.5 15.7956 1.5 15V6C1.5 5.20435 1.81607 4.44129 2.37868 3.87868C2.94129 3.31607 3.70435 3 4.5 3H19.5C20.2956 3 21.0587 3.31607 21.6213 3.87868C22.1839 4.44129 22.5 5.20435 22.5 6V15C22.5 15.7956 22.1839 16.5587 21.6213 17.1213C21.0587 17.6839 20.2956 18 19.5 18H15.87L13.305 22.5Z" fill={color} />
        <path d="M6 7.5H18V9H6V7.5ZM6 12H13.5V13.5H6V12Z" fill={color}/>
    </svg>
}

export function IconCheckmark({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
       <path d="M6.5 12L2 7.50003L2.707 6.79303L6.5 10.5855L13.293 3.79303L14 4.50003L6.5 12Z" fill={color} />
    </svg>
}

export function IconInfo({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8.5 11V7H6.5V8H7.5V11H6V12H10V11H8.5ZM8 4C7.85166 4 7.70666 4.04399 7.58332 4.1264C7.45999 4.20881 7.36386 4.32594 7.30709 4.46299C7.25032 4.60003 7.23547 4.75083 7.26441 4.89632C7.29335 5.0418 7.36478 5.17544 7.46967 5.28033C7.57456 5.38522 7.7082 5.45665 7.85368 5.48559C7.99917 5.51453 8.14997 5.49968 8.28701 5.44291C8.42406 5.38614 8.54119 5.29001 8.6236 5.16668C8.70601 5.04334 8.75 4.89834 8.75 4.75C8.75 4.55109 8.67098 4.36032 8.53033 4.21967C8.38968 4.07902 8.19891 4 8 4Z" fill={color}/>
        <path d="M8 15C6.61553 15 5.26216 14.5895 4.11101 13.8203C2.95987 13.0511 2.06266 11.9579 1.53285 10.6788C1.00303 9.3997 0.86441 7.99224 1.13451 6.63437C1.4046 5.2765 2.07129 4.02922 3.05026 3.05026C4.02922 2.07129 5.2765 1.4046 6.63437 1.13451C7.99224 0.86441 9.3997 1.00303 10.6788 1.53285C11.9579 2.06266 13.0511 2.95987 13.8203 4.11101C14.5895 5.26216 15 6.61553 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 2C6.81332 2 5.65328 2.3519 4.66658 3.01119C3.67989 3.67047 2.91085 4.60755 2.45673 5.7039C2.0026 6.80026 1.88378 8.00666 2.11529 9.17054C2.3468 10.3344 2.91825 11.4035 3.75736 12.2426C4.59648 13.0818 5.66558 13.6532 6.82946 13.8847C7.99335 14.1162 9.19975 13.9974 10.2961 13.5433C11.3925 13.0892 12.3295 12.3201 12.9888 11.3334C13.6481 10.3467 14 9.18669 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2Z" fill={color}/>
    </svg>
}

export function IconList({color='black'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 16.5H22.5V18H12V16.5ZM10.5 14.55L9.45 13.5L4.5 18.45L2.55 16.5L1.5 17.55L4.5 20.55L10.5 14.55ZM12 6H22.5V7.5H12V6ZM10.5 4.05L9.45 3L4.5 7.95L2.55 6L1.5 7.05L4.5 10.05L10.5 4.05Z" fill={color} />
    </svg>
}