import '../styles/Display.css';

function Display( {cv} ) {
    return (
        <div className="display-container"> 
            <div className="display">
                <h1>{cv.fullname}</h1>
                <h2>{cv.citizenship}</h2>
            </div>
            <div className="display-buttons">
                <button>Download</button>
            </div>
        </div>
    ) 
}

export default Display;