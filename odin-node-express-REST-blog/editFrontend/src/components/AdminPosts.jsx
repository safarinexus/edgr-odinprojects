import AdminPostcard from "./AdminPostcard"
import { Link } from "react-router-dom"

export default function AdminPosts({ userToken, posts, updatePosts }) {
    return (
        <div className="flex flex-col items-center">
            <div className="
                        w-11/12 mt-3 mb-3 p-5 h-48 md:h-32 rounded-lg bg-white
                        flex flex-col justify-evenly items-center text-black max-w-[1200px]
                    "
            >
                <h1 className="text-center text-3xl">Create a New Post</h1>
                <Link 
                    draggable='false'
                    to="/posts/create"
                    className="text-black flex justify-center items-center 
                                rounded-sm bg-gradient-to-r from-green-500 
                                to-cyan-500 w-[250px] md:w-[500px] h-10 hover:from-green-700 
                                hover:to-cyan-700">
                    Create
                </Link>
            </div>
            {posts.map(post => 
                <AdminPostcard 
                    userToken={userToken} 
                    key={post.pid} 
                    posts={posts} 
                    post={post} 
                    updatePosts={updatePosts} 
                />
            )}
        </div>
    )
}