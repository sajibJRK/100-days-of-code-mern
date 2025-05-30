let tasks = [];
function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${task}`;
        list.appendChild(li);
    });
}
function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value) {
        tasks.push(input.value);
        input.value = '';
        renderTasks();
    }
}
function removeLast() {
    tasks.pop();
    renderTasks();
}
function removeFirst() {
    tasks.shift();
    renderTasks();
}

renderTasks();