/*JAVASCRIPT Code for creating TO-DO LIST APPLICATION*/

// Get references to DOM elements
const TaskInp = document.getElementById('TaskInp');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task.text}
            <button class="edit" onclick="editTask(${index})">Edit</button>
            <button class="delete" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskText = TaskInp.value.trim();
    if (taskText) {
        tasks.push({ text: taskText });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        TaskInp.value = '';
        renderTasks();
    }
}

// Function to edit a task
function editTask(index) {
    const newTaskText = prompt("Edit your task:", tasks[index].text);
    if (newTaskText !== null) {
        tasks[index].text = newTaskText.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Event listeners
addBtn.addEventListener('click', addTask);

// Initial rendering of tasks
renderTasks();
