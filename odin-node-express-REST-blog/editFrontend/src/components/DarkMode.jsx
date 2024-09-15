import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function DarkMode() {

    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem("darkMode");
        return storedDarkMode === "true"; 
      });
      
    useEffect(() => {
        if (darkMode) {
        document.body.classList.add('dark');
        } else {
        document.body.classList.remove('dark');
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const handleClick = () => {
        if (darkMode) {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    }

    return (
        <button
            className="size-fit hover:opacity-60 absolute right-5"
            onClick={handleClick}
        >
            {darkMode ? (<MdLightMode className="size-7"/>) : (<MdDarkMode className="size-7"/>)}
        </button>
    )
}