document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskPriority = document.getElementById('task-priority');
    const taskCategory = document.getElementById('task-category');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();

        const taskText = taskInput.value;
        const dueDate = taskDate.value;
        const priority = taskPriority.value;
        const category = taskCategory.value;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText} (Due: ${dueDate}, Priority: ${priority}, Category: ${category})</span>
            <div>
                <button onclick="markComplete(this)">Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);

        taskInput.value = '';
        taskDate.value = '';
        taskPriority.value = 'low';
        taskCategory.value = 'work';
    }
});

function markComplete(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('complete');
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
