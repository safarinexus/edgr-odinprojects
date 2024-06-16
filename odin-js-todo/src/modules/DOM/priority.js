import updatePrio from '../storage/updatePrio';

export default function priority(task, i){ 
    setTimeout(() => {
        const high = document.querySelector('#high' + i);
        const med = document.querySelector('#med' + i);
        const low = document.querySelector('#low' + i);

        high.addEventListener("click", () => {
            
        })

        if (task.priority === 'high') {
            high.style.backgroundColor = 'red'; 
            high.style.color = 'white';
        } else if (task.priority === 'med') {
            med.style.backgroundColor = 'orange'; 
            med.style.color = 'white';
        } else {
            low.style.backgroundColor = 'green'; 
            low.style.color = 'white';
        }
    }, 50);
}