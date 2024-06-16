export default function update(project) {
    const id = project.id; 
    localStorage.setItem(id, JSON.stringify(project));
    console.log('Updated ' + project.name);
}