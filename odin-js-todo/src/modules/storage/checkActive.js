export default function checkActive() { 
    if (localStorage.getItem('active') !== null) {
        const active = localStorage.getItem('active'); 
        console.log(active + " retrieved!");
        return active;
    } else {    
        return false; 
    }
}