function addTodo() {
    const todoElement = document.getElementById("new-todo");
    const todo = todoElement.value;
        // Clear the value after entering it.
        todoElement.value = "";
    if (todo.length < 3) {
        return alert("You must have aleast 3 characters for your TODO list.");
    }
    const list = document.getElementById("list");
    const li = document.createElement("li");
    const text = document.createTextNode(todo);

    // . remove can be used on any html element.
    li.setAttribute("onclick", "this.remove()")
    

    li.appendChild(text);

    list.appendChild(li);
}

