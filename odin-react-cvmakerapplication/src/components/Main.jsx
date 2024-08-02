import { useState } from "react"
import Display from './Display.jsx'
import PersonalInfo from './PersonalInfo.jsx'
import Education from './Education.jsx'
import WorkContainer from './WorkContainer.jsx'

export default function Main() {
    const [ CV, setCV ] = useState({ 
        fullname: "", 
        email: "", 
        phone: "", 
        citizenship: "", 
        school: "", 
        degree: "", 
        educationStartDate: "", 
        educationEndDate: "", 
     });

    const editCV = (key, value) => {
        setCV({...CV, [key]: value});
      };

    return (
        <>
            <Display cv={CV}/>
            <PersonalInfo cv={CV} editCV = {editCV}/>
            <Education cv={CV} editCV = {editCV}/>
            <WorkContainer cv={CV} editCV = {editCV}/>
        </>
    )
}