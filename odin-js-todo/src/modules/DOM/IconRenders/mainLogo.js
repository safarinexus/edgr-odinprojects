import Logo from "../../../icons/logo.svg"; 

export default function mainLogo() {
    const LOGO = document.querySelector('#toplogo');

    const TopLogo = new Image(); 
    TopLogo.src = Logo;
    LOGO.prepend(TopLogo);
}
