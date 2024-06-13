export default function removeActive(id) {
    if (localStorage.getItem('active') !== null) {
        if (id === localStorage.getItem("active")) {
            localStorage.removeItem("active");
            console.log("active updated!");
            console.log(localStorage.getItem("active"));
        }
    }
}