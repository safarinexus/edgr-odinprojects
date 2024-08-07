export default function ExtraWork( { number, cv, editCV } ) {
    const NUM = parseInt(number) + 2;
    
    const handleCompanyChange = (e) => {
        editCV(cv.workExperience[number].company, e.target.value);
    };

    const handlePositionChange = (e) => {
        editCV(cv.workExperience[number].position, e.target.value);
    };

    const handleStartDateChange = (e) => {
        editCV(cv.workExperience[number].workStartDate, e.target.value);
    };

    const handleEndDateChange = (e) => {
        editCV(cv.workExperience[number].workEndDate, e.target.value);
    };

    const handleDescriptionChange = (e) => {
        editCV(cv.workExperience[number].description, e.target.value);
    };

    return (
        <fieldset className="work-fieldset" id={"work" + NUM}>
            <legend>{"Work Experience " + NUM}</legend>
            <label htmlFor="company">Company:</label>
            <input 
                type="text" 
                id="company" 
                name="company"
                value={cv.workExperience[number].company}
                onChange={handleCompanyChange}
            />
            <label htmlFor="position">Position:</label>
            <input 
                type="text" 
                id="position" 
                name="position"
                value={cv.workExperience[number].position}
                onChange={handlePositionChange}
            />
            <label htmlFor="description">Description:</label>
            <textarea 
                id="description" 
                name="description" 
                rows="4" 
                cols="50" 
                placeholder="Enter your job scope and responsibilities here..."
                value={cv.workExperience[number].description}
                onChange={handleDescriptionChange}
            ></textarea>
            <label htmlFor="workStartDate">Start Date:</label>
            <input 
                type="month" 
                id="workStartDate" 
                name="workStartDate"
                value={cv.workExperience[number].workStartDate}
                onChange={handleStartDateChange}
            />
            <label htmlFor="workEndDate">End Date:</label>
            <input 
                type="month" 
                id="workEndDate" 
                name="workEndDate"
                value={cv.workExperience[number].workEndDate}
                onChange={handleEndDateChange}
            />
        </fieldset>
    )
}