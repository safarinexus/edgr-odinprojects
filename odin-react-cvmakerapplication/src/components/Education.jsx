import '../styles/Education.css'; 

export default function Education({ cv, editCV }) {

    const handleSchoolChange = (e) => {
        editCV("school", e.target.value);
    };

    const handleDegreeChange = (e) => {
        editCV("degree", e.target.value);
    };

    const handleEduStartDateChange = (e) => {
        editCV("educationStartDate", e.target.value);
    };

    const handleEduEndDateChange = (e) => {
        editCV("educationEndDate", e.target.value);
    };

    return(
        <div className="container" id="education">
            <form className="education-form">
                <fieldset className="education-fieldset"> 
                    <legend>Education</legend>
                    <label htmlFor="school">School:</label>
                    <input 
                        type="text" 
                        id="school" 
                        name="school"
                        value={cv.school}
                        onChange={handleSchoolChange}
                    />
                    <label htmlFor="degree">Degree:</label>
                    <input 
                        type="degree" 
                        id="degree" 
                        name="degree"
                        value={cv.degree}
                        onChange={handleDegreeChange}
                    />
                    <label htmlFor="educationStartDate">Start Date:</label>
                    <input 
                        type="month" 
                        id="educationStartDate" 
                        name="educationStartDate"
                        value={cv.educationStartDate}
                        onChange={handleEduStartDateChange}
                    />
                    <label htmlFor="educationEndDate">End Date:</label>
                    <input 
                        type="month" 
                        id="educationEndDate" 
                        name="educationEndDate"
                        value={cv.educationEndDate}
                        onChange={handleEduEndDateChange}
                    />
                </fieldset>
            </form>
        </div>
    )
}
