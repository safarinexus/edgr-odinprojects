import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Signup({ updateToken }) {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        username: "", 
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = null;
        let loginResponse = null;
        const options = {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }
        try {
            response = await fetch(import.meta.env.VITE_BACKEND + "/users/register", options);
            response = await response.json();
        } catch (err) {
            console.error(err);
        }

        if (response === null || response.status !== 201) {
            return;
        }

        try {
            loginResponse = await fetch(import.meta.env.VITE_BACKEND + "/users/login", options);
            loginResponse = await loginResponse.json();
        } catch (err) {
            console.error(err);
        }

        if (loginResponse !== null && loginResponse.status === 200) {
            updateToken(loginResponse.token);
        }

        navigate("/");

    };

    return (
        <div id="signup-section" className="pb-24 flex flex-col items-center box-border text-black">
            <div id="signup-container" className="mt-20 h-96 w-[300px] sm:w-[600px] rounded-md shadow shadow-black dark:shadow-white bg-white">
                <form onSubmit={handleSubmit} id="signup-form" className="w-full h-full p-10 flex flex-col justify-start items-start">
                    <legend className="text-lg w-max font-bold mb-7">Create your blog account</legend>
                    <label htmlFor="username" className="mb-1">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        onChange={handleInputChange}
                        className="w-full h-10 p-1 border solid border-1 rounded-sm border-black mb-5" 
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={handleInputChange}
                        className="w-full h-10 p-1 border solid border-1 rounded-sm border-black mb-8" 
                        required
                    />
                    <button 
                        type="submit"
                        className="w-full h-12 rounded-md text-white bg-gradient-to-bl from-green-500 to-cyan-500 
                        :hover:bg-gradient-to-bl hover:from-green-700 hover:to-cyan-700"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        <p className="text-black dark:text-white mt-2">Already have an account? Log in <Link to="/" className="inline text">here.</Link></p>
    </div>
    )
}