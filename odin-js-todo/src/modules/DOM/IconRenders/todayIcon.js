import TodayIcon from '../../../icons/today.svg';

export default function todayIcon() {
    const TODAY = document.querySelector('#today');

    const Today = new Image(); 
    Today.src = TodayIcon; 
    TODAY.prepend(Today);
}