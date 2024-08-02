import '../styles/Header.css';
import logo from '../assets/logo.svg';

function Header() {
    return (
        <header> 
            <img src={logo} alt="logo" className="logo"></img>
            <h1>Odin CV Maker</h1> 
        </header>
    )
}

export default Header;