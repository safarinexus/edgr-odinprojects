import { useState,  useEffect, useRef } from "react";
import FirstWork from './FirstWork.jsx';
import ExtraWork from './ExtraWork.jsx';
import '../styles/WorkContainer.css';


export default function WorkContainer({ cv, editCV }) {
    const [works, setWorks] = useState([])    

    const addExperience = (e) => {
        if (works.length < 4) {
            editCV("workExperience", [...cv.workExperience, {
                company: "", 
                position: "", 
                description: "", 
                workStartDate: "", 
                workEndDate: "",
            }])
        } else {
            e.preventDefault(); 
        }
    }

    const addWork = () => {
        setWorks([...works, <ExtraWork key={works.length} number={works.length} cv={cv} editCV = {editCV}/>])
    }

    const deleteWork = (e) => {
        if (works.length !== 0) {
            setWorks(works.slice(0, -1));
            editCV("workExperience", cv.workExperience.slice(0, -1));
        } else {
            e.preventDefault(); 
        }
    }

    function Button({ name, handleClick }) {
        return (
          <button className={name} onClick={handleClick}></button>
        );
    }

    return(
        <div className="container" id="work">
            <form className="work-form">
                <fieldset className="work-container"> 
                    <legend>Work Experience</legend>
                        <FirstWork cv={cv} editCV={editCV}/>
                        {works}
                        <div className="workButtons"> 
                        {/*
                        <Button name="add" handleClick={addExperience}/>
                        <Button name="delete" handleClick={deleteWork}/>
                        */}
                    </div> 
                </fieldset>
            </form>
        </div>
    )
}