import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function IndivPost({ post, userToken }) {
    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
        title: post.title, 
        content: post.content,
    });

    useEffect(() => {
        console.log(formData);
    }, [formData])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleEdit = async () => {
        try { 
            const res = await fetch(import.meta.env.VITE_BACKEND + "/posts/" + post.pid , {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
                },
                body: JSON.stringify(formData)
            });
            if (!res.ok) { 
            throw new Error("response error");
            }
            const response = await res.json();
            console.log(response);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
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
                    required
                    className="bg-transparent w-full text-3xl mb-5 rounded-md p-2
                                line-clamp-1 text-ellipsis focus:bg-neutral-600 
                                focus:border-0 focus:outline-none focus:bg-opacity-60
                    " 
                />
                <p className="text-xs">{post.timestamp} </p>
                <hr />
                <p className="text-xs">{ post.ptype_id === 1 ? ("Unpublished") : ("Published")  }</p>
                <textarea
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
                    onClick={handleEdit}
                    className=" bg-lime-600 w-20 h-10 rounded-lg hover:bg-lime-800"
                >
                    Save
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