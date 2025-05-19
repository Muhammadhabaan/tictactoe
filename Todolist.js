document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });
            taskList.appendChild(li);

            const deleteButton = document.createElement('delete-button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
                taskList.removeChild(deleteButton);
            });
            taskList.appendChild(deleteButton);

            
            taskInput.value = '';
        }
    });
});