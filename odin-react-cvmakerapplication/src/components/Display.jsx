import '../styles/Display.css';

function Display( {cv, clearCV } ) {

    function Button({  name, handleClick }) {
        return (
          <button className={name} onClick={handleClick}>{name}</button>
        );
    }

    return (
        <div className="display-container"> 
            <div className="display">
                {/*for the header portion*/}
                { cv.fullname === "" && cv.email === "" && cv.phone === "" && cv.citizenship === "" 
                    ? ("") 
                    : (<div className="cv-header">
                            <h3>{cv.fullname}</h3>
                            <p>{cv.email}
                            { cv.phone !== "" ? (<>|{cv.phone}</>) : ("") }
                            { cv.citizenship !== "" ? (<>|{cv.citizenship}</>) : ("") }
                            </p>
                            <hr />
                    </div>)
                }
                {/*for the work experience portion*/}
                {  cv.company === "" && cv.position === "" && cv.description === "" && cv.workStartDate === "" && cv.workEndDate === "" 
                    ? ("")
                    : (<div className="cv-workexperience">
                        <div className="cvsection-header"><h4>Work Experience</h4></div>
                        <div className="workexperience-entry">
                            <p className="workExp-entry-date">{cv.workStartDate} - {cv.workEndDate}</p>
                            <h5 className="workExp-entry-company">{cv.company}</h5>
                            <p></p>
                            <h6 className="workExp-entry-position">{cv.position}</h6>
                            <p></p>
                            <p className="workExp-entry-description">{cv.description}</p> 
                        </div>
                    </div>)
                }
                {/*for the extra work experiences*/}
                {/*for the education portion*/}
                { cv.school === "" && cv.degree === "" && cv.educationStartDate === "" && cv.educationEndDate === "" 
                    ? ("") 
                    : (<div className="cv-education">
                        <div className="cvsection-header"><h4>Education</h4></div>
                        <div className="education-entry">
                            <p className="edu-entry-date">{cv.educationStartDate} - {cv.educationEndDate}</p>
                            <h5 className="edu-entry-school">{cv.school}</h5>
                            <p></p>
                            <p className="edu-entry-degree">{cv.degree}</p> 
                        </div>
                    </div>)
                }
            </div>
            <div className="display-buttons">
                <Button name="Reset" handleClick={clearCV}/>
            </div>
        </div>
    ) 
}

export default Display;