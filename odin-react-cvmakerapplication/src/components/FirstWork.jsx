export default function FirstWork({ cv, editCV }) {
    const handleCompanyChange = (e) => {
        editCV("company", e.target.value);
    };

    const handlePositionChange = (e) => {
        editCV("position", e.target.value);
    };

    const handleStartDateChange = (e) => {
        editCV("workStartDate", e.target.value);
    };

    const handleEndDateChange = (e) => {
        editCV("workEndDate", e.target.value);
    };

    const handleDescriptionChange = (e) => {
        editCV("description", e.target.value);
    };

    return (
        <fieldset className="work-fieldset" id={"work1"}>
            <legend>{"Work Experience 1"}</legend>
            <label htmlFor="company">Company:</label>
            <input 
                type="text" 
                id="company" 
                name="company"
                value={cv.company}
                onChange={handleCompanyChange}
            />
            <label htmlFor="position">Position:</label>
            <input 
                type="text" 
                id="position" 
                name="position"
                value={cv.position}
                onChange={handlePositionChange}
            />
            <label htmlFor="description">Description:</label>
            <textarea 
                id="description" 
                name="description" 
                rows="4" 
                cols="50" 
                placeholder="Enter your job scope and responsibilities here..."
                value={cv.description}
                onChange={handleDescriptionChange}
            ></textarea>
            <label htmlFor="workStartDate">Start Date:</label>
            <input 
                type="month" 
                id="workStartDate" 
                name="workStartDate"
                value={cv.workStartDate}
                onChange={handleStartDateChange}
            />
            <label htmlFor="workEndDate">End Date:</label>
            <input 
                type="month" 
                id="workEndDate" 
                name="workEndDate"
                value={cv.workEndDate}
                onChange={handleEndDateChange}
            />
        </fieldset>
    )   
}