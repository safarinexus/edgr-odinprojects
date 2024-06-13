export default function checkActive() { 
    if (localStorage.getItem('active') !== null) {
        const active = localStorage.getItem('active'); 
        console.log("task adding into: " + active); 
        return active;
    } else {    
        return false; 
    }
}