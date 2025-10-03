// ===== Current Date & Time =====
const dateTime = document.getElementById('dateTime');

function updateTime() {
    const now = new Date();
    dateTime.textContent = now.toLocaleString();
}

setInterval(updateTime, 1000);
updateTime();

// ===== To-Do List with LocalStorage =====
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if(task.done) li.style.textDecoration = 'line-through';
        li.addEventListener('click', () => {
            todos[index].done = !todos[index].done;
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        });
        li.addEventListener('dblclick', () => {
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        });
        todoList.appendChild(li);
    });
}

addTodoBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if(taskText) {
        todos.push({ text: taskText, done: false });
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
        todoInput.value = '';
    }
});

renderTodos();

// ===== Quote Generator =====
const quotes = [
    "Believe in yourself!",
    "The best time to start was yesterday. The second best is now.",
    "Do something today your future self will thank you for.",
    "Dream big. Start small.",
    "Happiness is homemade."
];

const quoteBtn = document.getElementById('quoteBtn');
const quoteText = document.getElementById('quoteText');

quoteBtn.addEventListener('click', () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = random;
});

// ===== Theme & Background =====
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
    const colors = ['#f5f5f5', '#ffe6e6', '#e6ffe6', '#e6e6ff', '#ffffe6', '#ffe6ff'];
    const random = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = random;
});
