import '../styles/Display.css';

function Display( {cv, clearCV} ) {

    function Button({  name, handleClick }) {
        return (
          <button className={name} onClick={handleClick}>{name}</button>
        );
    }

    return (
        <div className="display-container"> 
            <div className="display">
                <div className="cv-header">
                    <h3>{cv.fullname}</h3>
                    <p>{cv.email}|{cv.phone}|{cv.citizenship}</p>
                    <hr />
                </div>
                <div className="cv-workexperience">
                    <h4>Work Experience</h4>
                </div>
                <div className="cv-education">
                    <h4>Education</h4>
                </div>
            </div>
            <div className="display-buttons">
                <Button name="Reset" handleClick={clearCV}/>
            </div>
        </div>
    ) 
}

export default Display;