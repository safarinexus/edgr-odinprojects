import { Link } from "react-router-dom";

export default function AdminPostcard({ userToken, updatePosts, posts, post }) {
    const handleUnpublish = async (e) => {
        const original = posts; 
        const pid = e.target.id;
        const newPosts = posts.map(post => {
           return(post.pid === Number(pid) ?  {...post, ptype_id: 1} : post);
        })
        updatePosts(newPosts);
        const res = await fetch(import.meta.env.VITE_BACKEND + "/posts/" + pid, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            },
        });
        const data = await res.json(); 
        console.log(data); 
        if (res.status !== 200) {
            updatePosts(original);
        }
    };
    
    const handlePublish = async (e) => {
        const original = posts; 
        const pid = Number(e.target.id);
        const newPosts = posts.map(post => {
           return(post.pid === pid ?  {...post, ptype_id: 2} : post);
        })
        updatePosts(newPosts);
        const res = await fetch(import.meta.env.VITE_BACKEND + "/posts/" + pid, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            },
        });
        const data = await res.json(); 
        console.log(data); 
        if (res.status !== 200) {
            updatePosts(original);
        }
    };
    
    const handleDelete = async (e) => {
        const original = posts; 
        const pid = Number(e.target.id);
        const newPosts = posts.filter(post => {
            return post.pid !== pid;
        })
        updatePosts(newPosts);
        const res = await fetch(import.meta.env.VITE_BACKEND + "/posts/" + pid, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            },
        });
        const data = await res.json(); 
        console.log(data); 
        if (res.status !== 200) {
            updatePosts(original);
        }
    };

    return (
        <div 
            key={post.pid}
            className="
                w-11/12 mt-3 mb-3 p-5 h-48 md:h-32 rounded-lg bg-white
                grid grid-cols-[60%_40%] md:grid-cols-[75%_25%] grid-rows-2
                gap-2 text-black max-w-[1200px]
            "
        > 
            <div>
                <Link
                    to={"/posts/" + post.pid}   
                    className="line-clamp-2 self-end text-lg font-bold text-black"
                >
                    {post.title}
                </Link>
                <hr />
            </div>
            <p className="text-sm justify-self-end">
                <span className="text-xs">{post.timestamp} </span> 
                | {post.ptype_id === 1 ? 
                    (<span className="text-red-500">Unpublished</span>) : 
                    (<span className="text-green-500">Published</span>)
                } 
                </p>
            <p className="line-clamp-2 self-end">{post.content}</p>
            <div className="self-center justify-self-end">
                {
                post.ptype_id === 1 ?
                (
                    <button 
                        id={post.pid}
                        className="text-xs w-16 h-9 m-1 rounded-md border-2 bg- border-black hover:bg-slate-500"
                        onClick={handlePublish}
                    >
                        Publish
                    </button>
                ) :
                (
                    <button 
                        id={post.pid}
                        className="text-xs w-16 h-9 m-1 rounded-md border-2 bg- border-black hover:bg-slate-500"
                        onClick={handleUnpublish}
                    >
                        Unpublish
                    </button>
                ) 
                }
                <button 
                    id={post.pid}
                    className="text-xs w-16 h-9 m-1 rounded-md border-0 bg-rose-700 text-white hover:bg-rose-950"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}