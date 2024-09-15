import Postcard from "./Postcard";

export default function Posts({ posts }) {

    return (
        <div className="p-3 w-full flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-start justify-items-center content-start gap-2">
            {posts.map(post => {
                if (post.pid === 2) {
                    return (<Postcard big={true} key={post.pid} post={post}/>)
                } else {
                    return (<Postcard big={false} key={post.pid} post={post}/>);
                }
            })}
            </div>
        </div>
    )
}
