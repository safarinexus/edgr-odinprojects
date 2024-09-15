import { Link } from "react-router-dom";

export default function Postcard({ big, post } ) {
    if (big) {
        
        return (
            <Link 
                id={post.pid}
                to={"/posts/" + post.pid}
                className="bg-white rounded-sm text-black h-[350px] w-[300px] sm:w-[608px]
                lg:w-[668px] lg:h-[708px] sm:col-span-2 cursor-pointer grid grid-rows-[70%_10%_20%]
                grid-col-1 p-5 hover:-translate-y-1 transition-all lg:row-span-2"
            >
                <div className="h-full w-full relative">    
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl line-clamp-5 font-black absolute bottom-3">{post.title}</h1>
                    <hr className="absolute bottom-0 h-1 w-full" />
                </div>
                <small className="lg:text-xl font-extralight self-end">{post.timestamp}</small>
                <p className="lg:text-3xl text-ellipsis w-[260px] h-[100px] line-clamp-3 self-start mt-5">{post.content}</p>
            </Link>
        )
    } else {
        return (
            <Link 
                id={post.pid}
                to={"/posts/" + post.pid}
                className="bg-white rounded-sm text-black h-[350px] w-[300px] 
                lg:w-[330px] cursor-pointer grid grid-rows-[70%_10%_20%] grid-col-1 
                p-5 hover:-translate-y-1 transition-all"
            >
                <div className="h-full w-full relative">
                    <h1 className="text-4xl line-clamp-5 font-black absolute bottom-3">{post.title}</h1>
                    <hr className="absolute bottom-0 h-1 w-full" />
                </div>
                <small className="font-extralight self-end">{post.timestamp}</small>
                <p className="text-ellipsis w-[260px] h-[50px] line-clamp-2 self-end">{post.content}</p>
            </Link>
        )
    }    
}
