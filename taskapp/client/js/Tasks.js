class Tasks {
  constructor(parent, item) {
    this.parent = parent;
    this.name = item.name;
    this.completed = item.isCompleted;
  }

  render() {
    let li = document.createElement("li");
    this.parent.append(li);
    li.insertAdjacentHTML(
      "afterbegin",
      `
         <input type="checkbox" ${this.completed ? "checked" : ""}/>
         <span>${this.name}</span>
         <button class='editBtn'>Edit</button>
         <button class='removeBtn'>X</button>
      `
    );
    return li;
  }
}

export default Tasks;
