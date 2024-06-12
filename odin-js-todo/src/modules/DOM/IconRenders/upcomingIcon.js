import UpcomingIcon from '../../../icons/upcoming.svg';

export default function upcomingIcon() {
    const UPCOMING = document.querySelector('#upcoming');

    const Upcoming = new Image(); 
    Upcoming.src = UpcomingIcon;
    UPCOMING.prepend(Upcoming);
}