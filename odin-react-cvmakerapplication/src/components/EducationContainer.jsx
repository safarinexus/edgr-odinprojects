import '../styles/EducationContainer.css'; 

export default function EducationContainer({ cv, editCV }) {

    return(
        <div className="container" id="education">
            <form className="education-form">
                <fieldset className="education-fieldset" style={{gridTemplateRows: "repeat(4, 53px)"}}> 
                    <legend>Education</legend>
                    <label htmlFor="school">School:</label>
                    <input 
                        type="text" 
                        id="school" 
                        name="school"
                    />
                    <label htmlFor="degree">Degree:</label>
                    <input 
                        type="degree" 
                        id="degree" 
                        name="degree"
                    />
                    <label htmlFor="educationStartDate">Start Date:</label>
                    <input 
                        type="date" 
                        id="educationStartDate" 
                        name="educationStartDate"
                    />
                    <label htmlFor="educationEndDate">End Date:</label>
                    <input 
                        type="date" 
                        id="educationEndDate" 
                        name="educationEndDate"
                    />
                </fieldset>
            </form>
        </div>
    )
}
