import { Link } from "react-router-dom";
import Header from './Header'; 
import '../styles/ErrorPage.css';

export default function ErrorPage() {
    return (
        <>
            <Header /> 
            <h1>Oops! Error 404: Page not found.</h1>
            <Link to="/"> 
                Click here to head back.
            </Link>
        </>
    )
}