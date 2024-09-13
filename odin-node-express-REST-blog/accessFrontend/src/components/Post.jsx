export default function Post({ post }) { 
    return (
        <div className="flex flex-col p-10">
            <h1 className="text-5xl sm:text-7xl">{post.title}</h1>
            <br />
            <p className="font-light">{post.timestamp}</p>
            <br />
            <div className="self-center w-[100%] text-justify bg-slate-50 p-5 rounded-lg text-black">
                <hr />
                <p className="text-xs sm:text-base mt-3">{post.content}</p>
            </div>
            
        </div>
    )
}