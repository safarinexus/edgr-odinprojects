import { Link } from "react-router-dom";
import '../styles/Home.css';

export default function Home() {
    return (
    <>
        <div className="first-section">
            <h1>Welcome to Odin Shop.</h1>
        </div>
        <div className='second-section'>

        </div>
        <div className="third-section">
            <Link to="/shop"><button>Shop Now</button></Link>
        </div>
    </>
    )
}