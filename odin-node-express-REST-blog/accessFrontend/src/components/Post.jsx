import Comments from "./Comments"

export default function Post({ post, userToken }) { 
    return (
        <div className="grid grid-cols-1 grid-rows-2 gap-5 p-10 min-h-[600px]">
            <div>
                <h1 className="text-5xl sm:text-7xl">{post.title}</h1>
                <br />
                <p className="font-light">{post.timestamp}</p>
                <br />
                <div className="self-center w-[100%] text-justify bg-slate-50 p-5 rounded-lg text-black">
                    <hr />
                    <p className="text-xs sm:text-base mt-3">{post.content}</p>
                </div>
            </div>
            <Comments pid={post.pid} userToken={userToken}/>
        </div>
    )
}