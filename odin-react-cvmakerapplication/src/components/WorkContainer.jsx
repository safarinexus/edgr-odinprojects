import { useState } from "react";
import Work from './Work';
import '../styles/WorkContainer.css';


export default function WorkContainer({ editCV }) {
    const [works, setWorks] = useState([<Work key={1} number={1} first={true} editCV = {editCV}/>])    

    const addWork = (e) => {
        if (works.length < 5) {
            setWorks([...works, <Work key={works.length + 1} number={works.length + 1} first={false} editCV = {editCV}/>])
        } else {
            e.preventDefault(); 
        }
    }

    const deleteWork = (e) => {
        if (works.length > 1) {
            setWorks(works.slice(0, -1));
        } else {
            e.preventDefault(); 
        }
    }

    function Button({  name, handleClick }) {
        return (
          <button className={name} onClick={handleClick}></button>
        );
    }

    return(
        <div className="container" id="work">
            <form className="work-form">
                <fieldset className="work-container"> 
                    <legend>Work Experience</legend>
                        {works}
                        <div className="workButtons"> 
                        <Button name="add" handleClick={addWork}/>
                        <Button name="delete" handleClick={deleteWork}/>
                    </div> 
                </fieldset>
            </form>
        </div>
    )
}