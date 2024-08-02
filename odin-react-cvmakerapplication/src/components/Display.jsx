import '../styles/Display.css';

function Display( {cv} ) {
    return (
        <div className="display-container"> 
            <div className="display">
                <h1>{cv.fullname}</h1>
                <h2>{cv.citizenship}</h2>
                <h2>{cv.school}</h2>
                <h5>{cv.educationStartDate}</h5>
                <h5>{cv.educationEndDate}</h5>
            </div>
            <div className="display-buttons">
                <button>Download</button>
            </div>
        </div>
    ) 
}

export default Display;