import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Error from "./Error";
import LogOut from "./LogOut";

export default function CreatePost({ userToken }) {
    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
        title: "", 
        content: "",
    });

    //rmb to import
    //useEffect(() => {
    //    console.log(formData);
    //}, [formData])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleCreate = async () => {
        const res = await fetch(import.meta.env.VITE_BACKEND + "/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            },
            body: JSON.stringify(formData),
        })
        if (!res.ok) { 
            throw new Error("response error");
          }
        const response = await res.json();
        if (response.status !== 201) {
            return (
                <>
                    <Header userToken={userToken} logOut={LogOut}/>
                    <Error />
                </>
            )
        }
        navigate("/");
        navigate(0);
    }

    const handleCancel = () => {
        navigate("/");
    }

    return (
        <div className="grid grid-cols-1 grid-rows-[90%_10%]">
            <div className="p-10">
                <input 
                    onChange={handleInputChange}
                    type="text" 
                    value={formData.title} 
                    name="title" 
                    placeholder="Title here..."
                    required
                    className="bg-transparent w-full text-3xl mb-5 rounded-md p-2
                                line-clamp-1 text-ellipsis focus:bg-neutral-600 
                                focus:border-0 focus:outline-none focus:bg-opacity-60
                    " 
                />
                <hr />
                <textarea
                    placeholder="Post content here..."
                    onChange={handleInputChange}
                    value={formData.content}
                    name="content"
                    required
                    className="bg-gray-300 text-black h-[60svh] min-h-[500px] 
                                rounded-md p-2 text-l mt-5 
                                focus:outline-none w-full resize-none
                    " 
                />
            </div>
            
            <div className="flex w-80 justify-evenly items-center justify-self-center self-center">
                <button 
                    value={JSON.stringify(formData)}
                    onClick={handleCreate}
                    className=" bg-lime-600 w-20 h-10 rounded-lg hover:bg-lime-800"
                >
                    Create
                </button>
                <button 
                    onClick={handleCancel}
                    className=" bg-red-600 w-20 h-10 rounded-lg hover:bg-red-800"
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}