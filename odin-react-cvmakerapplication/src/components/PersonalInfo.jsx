import '../styles/PersonalInfo.css'; 

export default function PersonalInfo({ cv, editCV }) {
    const handleNameChange = (e) => {
        editCV("fullname", e.target.value);
    };

    const handleEmailChange = (e) => {
        editCV("email", e.target.value);
    };

    const handlePhoneChange = (e) => {
        editCV("phone", e.target.value);
    }

    const handleCitizenshipChange = (e) => {
        editCV("citizenship", e.target.value);
    }
    
    return (
        <div className="container" id="personal-info"> 
            <form className="personal-info-form"> 
                <fieldset className="personal-info-fieldset" style={{gridTemplateRows: "repeat(4, 53px)"}}>
                    <legend>Personal Info</legend>
                    <label htmlFor="fullname">Full Name:</label>
                    <input 
                        type="text" 
                        id="fullname" 
                        name="fullname"
                        value={cv.fullname}
                        onChange={handleNameChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={cv.email}
                        onChange={handleEmailChange}
                    />
                    <label htmlFor="phone">Phone Number:</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        pattern="[0-9]{8}"
                        maxLength="8"
                        value={cv.phone}
                        onChange={handlePhoneChange} 
                    />
                    <label htmlFor="citizenship">Citizenship:</label>
                    <input 
                        type="text" 
                        id="citizenship" 
                        name="citizenship"
                        value={cv.citizenship}
                        onChange={handleCitizenshipChange} 
                    />
                </fieldset>
            </form>
        </div>
    )
}
