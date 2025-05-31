let todos = [];
let filter = "all";

function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (text === "") return;

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(newTodo);
    input.value = "";
    renderTodos();
}

function toggleTodo(id) {
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
}

function setFilter(newFilter) {
    filter = newFilter;
    renderTodos();
}

function getFilteredTodos() {
    if (filter === "completed") {
        return todos.filter(todo => todo.completed);
    } else if (filter === "incomplete") {
        return todos.filter(todo => !todo.completed);
    } else {
        return todos;
    }
}

function renderTodos() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    const filtered = getFilteredTodos();

    filtered.forEach(todo => {
        const li = document.createElement("li");
        li.className = todo.completed ? "completed" : "";
        li.textContent = todo.text;
        li.onclick = () => toggleTodo(todo.id);
        todoList.appendChild(li);
    });
}