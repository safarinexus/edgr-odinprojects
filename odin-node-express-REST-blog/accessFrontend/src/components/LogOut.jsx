export default function LogOut({ logOut }) {
    return (
        <div onClick={logOut} className="cursor-pointer hover:dark:text-gray-400 hover:text-gray-600" draggable="false">
            Log out
        </div>
    )
}