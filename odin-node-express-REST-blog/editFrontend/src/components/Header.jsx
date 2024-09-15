import DarkMode from "./DarkMode";
import LogOut from "./LogOut";
import { Link } from 'react-router-dom';

export default function Header({ userToken, logOut }) {

    return ( 
        <header id="header" className="h-24 w-fullz-10 flex justify-center items-center">
            <Link to='/' className='absolute left-5 w-min flex items-center'>
                <h1 className="w-min font-bold text-3xl tracking-tight leading-6">
                    Odin Blog API
                </h1>   
                <h1 className="font-bold sm:text-3xl tracking-tight">&#40;Editor&#41;</h1>
            </Link>
            <nav className="flex justify-end items-center absolute right-16">
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