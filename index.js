let myTask = [];
const tasks = document.getElementById("tasks");
const addTask = document.getElementById("add-task");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")

// Get tasks from localStorage if any
let taskLocalStorage = JSON.parse(localStorage.getItem("myTask"));
if (taskLocalStorage) {
  myTask = taskLocalStorage;
  renderTasks();
}

function renderTasks() {
  let listTask = "";
  for (let i = 0; i < myTask.length; i++) {
    listTask += `<li>
      ${myTask[i]}
      <button onclick="deleteTask('${myTask[i]}')">Delete</button>
    </li>`;
  }
  ulEl.innerHTML = listTask;
}

// Function to handle deletion of a specific task
function deleteTask(taskToDelete) {
  const index = myTask.indexOf(taskToDelete);
  myTask.splice(index, 1);  // Remove task from myTask array
  localStorage.setItem("myTask", JSON.stringify(myTask));  // Update localStorage
  renderTasks();  // Re-render the task list
}

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myTask = [];
  renderTasks();
})

// Function to render tasks with delete buttons

// Add new task button
addTask.addEventListener("click", function() {
  myTask.push(tasks.value);
  tasks.value = "";
  localStorage.setItem("myTask", JSON.stringify(myTask));
  renderTasks();
});
