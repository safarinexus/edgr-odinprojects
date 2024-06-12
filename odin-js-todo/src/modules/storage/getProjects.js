export default function getProjects() {
    let projects = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key !== "active") {
        let value = localStorage.getItem(key);
        projects.push(JSON.parse(value));
      }
    }

    //can try sorting here to maintain add order;

    return projects;
  }