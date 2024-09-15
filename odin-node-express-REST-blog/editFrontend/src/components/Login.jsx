import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Login({ updateToken }) {

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
        const options = {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }

        try {
            response = await fetch(import.meta.env.VITE_BACKEND + "/users/login/admin", options);
            response = await response.json();
        } catch (err) {
            console.error(err);
        }

        if (response !== null && response.status === 200) {
            updateToken(response.token);
        }

        navigate("/");

    };

    return (
        <div id="login-section" className="pb-24 flex flex-col items-center box-border text-black">
            <div id="login-container" className="mt-20 h-96 w-[300px] sm:w-[600px] rounded-md shadow shadow-black dark:shadow-white bg-white">
                <form onSubmit={handleSubmit} id="login-form" className="w-full h-full p-10 flex flex-col justify-start items-start">
                    <legend className="text-lg w-max font-bold mb-7">Log in to your blog author account</legend>
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
                        Log In
                    </button>
                </form>
            </div>
        <p className="text-black dark:text-white mt-2">Only have a basic account? Upgrade <Link to="/signup" className="inline text">here.</Link></p>
    </div>
    )
}