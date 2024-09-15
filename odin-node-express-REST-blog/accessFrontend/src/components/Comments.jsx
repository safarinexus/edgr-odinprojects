import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Comments({ pid, userToken }) {
    const [ comments, setComments ] = useState([]); 
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const navigate = useNavigate();
    const [ commentData, setCommentData ] = useState({
        content: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCommentData({
          ...commentData,
          [name]: value,
        });
    }

    const handleAdd = async () => {
        if (commentData.content !== "") {
            try { 
                const res = await fetch(import.meta.env.VITE_BACKEND + "/posts/" + JSON.stringify(pid) + "/comments" , {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + userToken
                    },
                    body: JSON.stringify(commentData)
                });
                if (!res.ok) { 
                throw new Error("response error");
                }
                const response = res.json();
                console.log(response);
                navigate(0);
            } catch (error) { 
                setError(error);
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
        const options = { 
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userToken
            },
        }
        try { 
            const res = await fetch(import.meta.env.VITE_BACKEND + "/posts/" + JSON.stringify(pid) + "/comments" , options);
            if (!res.ok) { 
            throw new Error("response error");
            }
            const data = await res.json();  
            setComments(data.comments);
        } catch (error) { 
            setError(error); 
        } finally { 
            setLoading(false);
        }
        } 
    
        fetchData();
      }, [comments])

    if (loading) {
        return (
            <div 
            className="bg-slate-50 p-5 rounded-lg text-black 
                        w-full
            "
        >
            <h1 className="text-3xl">Comments</h1>
            <hr />
            <h1 className="w-full flex justify-center items-center">Loading...</h1>
        </div>
        )
    }

    if (error) {
        return (
            <div 
            className="bg-slate-50 p-5 rounded-lg text-black 
                        w-full
            "
        >
            <h1 className="text-3xl">Comments</h1>
            <hr />
            <h1 className="w-full flex justify-center items-center">Unable to retrieve comments</h1>
        </div>
        )
    }

    if (comments.length === 0) {
        return (
            <div 
            className="bg-slate-50 p-5 rounded-lg text-black 
                        w-full
            "
        >
            <h1 className="text-3xl">Comments</h1>
            <hr />
            <div className="flex items-center">
            <textarea
                    type="text" 
                    onChange={handleChange}
                    name="content"
                    className="w-full h-24 p-5 mt-4 mb-4 focus:outline-none
                            text-black bg-neutral-500
                            focus:bg-opacity-50
                            rounded-md resize-none focus:text-white
                    "
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    className="rounded-md text-white bg-emerald-500 h-24 w-24 m-1"
                >Add Comment</button>
            </div>
            <h1 className="w-full flex justify-center items-center">No comments.</h1>
        </div>
        )
    }


    return (
        <div 
            className="bg-slate-50 p-5 rounded-lg text-black 
                        w-full flex flex-col h-max
            "
        >
            <h1 className="text-3xl">Comments</h1>
            <hr />
            <div className="flex items-center">
                <textarea
                    type="text" 
                    onChange={handleChange}
                    name="content"
                    className="w-full h-24 p-5 mt-4 mb-4 focus:outline-none
                            text-black bg-neutral-500
                            focus:bg-opacity-50
                            rounded-md resize-none focus:text-white
                    "
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    className="rounded-md text-white bg-emerald-500 h-24 w-24 m-1"
                >Add Comment</button>
            </div>
            <div className="h-max">
            {
                comments.map((comment) => {
                    return (
                        <div key={comment.cid} className="border border-black p-2 m-2 rounded-md"> 
                            <h1>{comment.content}</h1>
                            <p>{comment.timestamp}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}