import DarkMode from "./DarkMode";
import LogOut from "./LogOut";
import { Link, NavLink } from 'react-router-dom';

export default function Header({ userToken, logOut }) {

    return ( 
        <header id="header" className="h-24 w-full z-10 flex justify-center items-center">
            <Link to='/' className='absolute left-5 w-min'>
                <h1 className="w-20 h-min font-bold text-3xl tracking-tight leading-6">
                    Odin Blog API
                </h1>   
            </Link>
            <nav className="w-fit h-full flex justify-end items-center absolute right-16">
                {userToken === null || userToken === "null" ?
                 "" :
                (
                <LogOut logOut={logOut}/>
                )
                }
            </nav>
            <DarkMode />        
        </header>
    )
}