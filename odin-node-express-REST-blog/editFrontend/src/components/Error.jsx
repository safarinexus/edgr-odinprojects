export default function Error({ error=null }) { 
    return (
        <div className=" pt-24 pb-24 flex flex-col items-center">
            <div className="mt-16 h-[200px] max-w-4xl w-3/4 p-6 flex flex-col items-start justify-center bg-slate-300 shadow-sm shadow-black dark:shadow-white">
                <h1 className="text-2xl  text-black font-semibold"><span className="italic">Oops!</span> Something&#39;s gone wrong</h1>
                <h3 className="text-xl text-neutral-800 mt-6 font-extralight">{ error ? ("") : ("Sorry - 404 error")}</h3>
            </div>
        </div>
    )
}