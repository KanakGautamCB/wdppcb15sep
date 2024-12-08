<h1>JavaScript Code Explanation for TaskMaster</h1>
<h2>1. Initializing the Application</h2>
        <p>
            The first block of code ensures the DOM is fully loaded before the script runs. It defines variables and attaches event listeners to HTML elements.
        </p>
        <pre><code>
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const clearCompletedButton = document.getElementById('clear-completed');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
});
        </code></pre>
        <p><strong>Explanation:</strong></p>
        <ul>
            <li><strong>DOMContentLoaded:</strong> Ensures all HTML is fully loaded before JavaScript is executed.</li>
            <li><strong>tasks:</strong> Loads saved tasks from <code>localStorage</code>. If none exist, it initializes an empty array.</li>
        </ul>
<h2>2. Adding a Task</h2>
        <p>
            The <code>addTask</code> function is triggered when the form is submitted. It captures the input value, creates a new task object, and saves it.
        </p>
        <pre><code>
function addTask(e) {
    e.preventDefault(); // Prevents page refresh
    const task = taskInput.value.trim();
    if (task) {
        tasks.push({ text: task, completed: false });
        saveTask();
        renderTask();
    }
}
        </code></pre>
        <p><strong>Explanation:</strong></p>
        <ul>
            <li><strong>e.preventDefault():</strong> Stops the form from refreshing the page.</li>
            <li><strong>Task Object:</strong> Each task is stored as an object with <code>text</code> (task description) and <code>completed</code> (status).</li>
            <li><strong>Updates:</strong> Saves the task list to local storage and re-renders the task list.</li>
        </ul>

<h2>3. Rendering Tasks</h2>
        <p>
            The <code>renderTask</code> function dynamically updates the task list in the UI based on the current state of the <code>tasks</code> array.
        </p>
        <pre><code>
function renderTask(newTasks = tasks) {
    taskList.innerHTML = ''; // Clear existing tasks

    newTasks.forEach((task, indx) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <div class="task-actions">
                <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        li.className = \`task-item \${task.completed ? 'completed' : ''}\`;
        taskList.appendChild(li);

        const completeBtn = li.querySelector('.complete-btn');
        const editBtn = li.querySelector('.edit-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        completeBtn.addEventListener('click', () => completeTask(indx));
        deleteBtn.addEventListener('click', () => deleteTask(indx));
        editBtn.addEventListener('click', () => editTask(li, indx));
    });
}
        </code></pre>
        <p><strong>Explanation:</strong></p>
        <ul>
            <li><strong>Dynamic Rendering:</strong> Clears and repopulates the task list based on the tasks array.</li>
            <li><strong>Event Listeners:</strong> Adds functionality for each task's buttons (Complete, Edit, Delete).</li>
            <li><strong>CSS Classes:</strong> Uses the <code>completed</code> class to visually indicate task status.</li>
        </ul>
<h2>4. Marking a Task as Completed/Uncompleted</h2>
        <p>
            The <code>completeTask</code> function toggles a task's completion status.
        </p>
        <pre><code>
function completeTask(indx) {
    tasks[indx].completed = !tasks[indx].completed;
    saveTask();
    renderTask();
}
        </code></pre>
        <p><strong>Explanation:</strong></p>
        <ul>
            <li><strong>Toggle Logic:</strong> Changes the <code>completed</code> property of the task.</li>
            <li><strong>Re-render:</strong> Updates the UI to reflect the new status.</li>
        </ul>

<h2>5. Editing a Task</h2>
        <p>
            The <code>editTask</code> function allows users to modify the task's description.
        </p>
        <pre><code>
function editTask(li, indx) {
    let span = li.firstElementChild;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.innerText;
    li.replaceChild(input, span);
    input.focus();

    input.addEventListener('blur', () => {
        let updatedTaskValue = input.value.trim();
        if (updatedTaskValue) {
            tasks[indx].text = updatedTaskValue;
        }
        saveTask();
        renderTask();
    });
}
        </code></pre>
        <p><strong>Explanation:</strong></p>
        <ul>
            <li><strong>Input Field:</strong> Replaces the task's text with an input box for editing.</li>
            <li><strong>blur Event:</strong> Captures the updated value when the input box loses focus.</li>
            <li><strong>Validation:</strong> Ensures the updated value is not empty before saving.</li>
        </ul>

<h2>6. Deleting a Task</h2>
        <p>
            The <code>deleteTask</code> function removes a task from the <code>tasks</code> array and updates the UI.
        </p>
        <pre><code>
function deleteTask(indx) {
    tasks.splice(indx, 1);
    saveTask();
    renderTask();
}
        </code></pre>
        <p><strong>Explanation:</strong></p>
        <ul>
            <li><strong>splice:</strong> Removes the task at the given index.</li>
            <li><strong>Re-render:</strong> Updates the task list immediately after deletion.</li>
        </ul>

<h2>7. Clearing Completed Tasks</h2>
        <p>
            The <code>clearCompleted</code> function filters out completed tasks and updates the task list.
        </p>
        <pre><code>
function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    saveTask();
    renderTask();
}
        </code></pre>
        <p><strong>Explanation:</strong></p>
        <ul>
            <li><strong>Filter Logic:</strong> Creates a new array excluding completed tasks.</li>
            <li><strong>Re-render:</strong> Refreshes the task list without completed items.</li>
        </ul>

<h2>8. Filtering Tasks</h2>
        <p>
            The <code>filter-buttons</code> logic allows users to display only certain tasks (All, Active, Completed).
        </p>
        <pre><code>
document.querySelector('.filter-buttons').addEventListener('click', (ev) => {
    const taskStatus = ev.target.getAttribute('id').split('-').pop();

    filterButtons.forEach((item) => {
        item.classList.toggle('active', item.getAttribute('id').split('-').pop() === taskStatus);
    });

    if (taskStatus === 'all') {
        renderTask();
    } else if (taskStatus === 'active') {
        renderTask(tasks.filter(t => !t.completed));
    } else if (taskStatus === 'completed') {
        renderTask(tasks.filter(t => t.completed));
    }
});
        </code></pre>
        <p><strong>Explanation:</strong></p>
        <ul>
            <li><strong>Class Toggle:</strong> Updates the <code>active</code> class to highlight the selected filter button.</li>
            <li><strong>Conditional Rendering:</strong> Calls <code>renderTask</code> with a filtered array based on the selected status.</li>
        </ul>

<h2>9. Saving to Local Storage</h2>
        <p>
            The <code>saveTask</code> function saves the <code>tasks</code> array to local storage.
        </p>
        <pre><code>
function saveTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
        </code></pre>
        <p><strong>Explanation:</strong></p>
        <ul>
            <li><strong>Persistence:</strong> Converts the tasks array to a JSON string and stores it in the browser.</li>
        </ul>

<h2>10. Initial Rendering</h2>
        <p>
            Finally, the script calls <code>renderTask()</code> to populate the task list with saved tasks when the page loads.
        </p>
        <pre><code>
renderTask();
        </code></pre>
        <p><strong>Explanation:</strong></p>
        <ul>
            <li>Ensures the UI reflects the tasks stored in local storage.</li>
        </ul>

<h2>Overall Flow</h2>
        <ul>
            <li>User adds a task → Task is saved to <code>tasks</code> and displayed.</li>
            <li>User interacts with tasks (Edit, Complete, Delete) → Updates the array and UI.</li>
            <li>Tasks persist between sessions using <code>localStorage</code>.</li>
        </ul>
