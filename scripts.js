document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskTime = document.getElementById('taskTime');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(taskInput.value, taskTime.value);
        taskInput.value = '';
        taskTime.value = '';
    });

    function addTask(task, time) {
        const li = document.createElement('li');
        li.textContent = `${task} - ${time}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = () => taskList.removeChild(li);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        setAlarm(task, time);
    }

    function setAlarm(task, time) {
        const taskTime = new Date(time).getTime();
        const now = new Date().getTime();
        const timeToAlarm = taskTime - now;

        if (timeToAlarm > 0) {
            setTimeout(() => {
                alert(`Task: ${task} is due now!`);
            }, timeToAlarm);
        }
    }
});
