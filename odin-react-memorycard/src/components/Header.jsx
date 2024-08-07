import '../styles/Header.css';
import logo from '../assets/brain.svg';

function Header() {
    return (
        <header> 
            <img src={logo} alt="logo" className="logo"></img>
            <h1>Odin Memory Card</h1> 
            <h3>&#40;Disney Edition!&#41;</h3>
        </header>
    )
}

export default Header;