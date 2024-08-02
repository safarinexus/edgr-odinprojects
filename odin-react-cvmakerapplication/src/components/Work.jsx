import { useState } from "react";

export default function Work( { number, first, editCV } ) {
    const name = "workExprience" + number;

    const [workExperience, setWorkExperience] = useState({})


    return (
        <fieldset className="work-fieldset" id={"work" + number}>
            <legend>{"Work Experience " + number}</legend>
            <label htmlFor="company">Company:</label>
            <input 
                type="text" 
                id="company" 
                name="company"
            />
            <label htmlFor="position">Position:</label>
            <input type="text" id="position" name="position"/>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows="4" cols="50" placeholder="Enter your job scope and responsibilities here..."></textarea>
            <label htmlFor="workStartDate">Start Date:</label>
            <input type="date" id="workStartDate" name="workStartDate"/>
            <label htmlFor="workEndDate">End Date:</label>
            <input type="date" id="workEndDate" name="workEndDate"/>
        </fieldset>
    )
}