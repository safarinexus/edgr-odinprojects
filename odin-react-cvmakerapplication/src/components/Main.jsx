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

    const clearCV = () => {
        const temp = { 
            fullname: "", 
            email: "", 
            phone: "", 
            citizenship: "", 
            school: "", 
            degree: "", 
            educationStartDate: "", 
            educationEndDate: "", 
         };
        setCV(temp);
    }

    return (
        <>
            <Display cv={CV} clearCV = {clearCV}/>
            <PersonalInfo cv={CV} editCV = {editCV}/>
            <Education cv={CV} editCV = {editCV}/>
            <WorkContainer cv={CV} editCV = {editCV}/>
        </>
    )
}