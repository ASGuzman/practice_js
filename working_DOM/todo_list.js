const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTasksBtn = document.getElementById("clearAllTasksBtn");

let tasks = [];

function addTask(){
    const taskText = taskInput.value.trim(); // elimina cualquier espacio en blanco que haya al final
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false}); // Si el texto no está vacío, se agrega un nuevo objeto al arreglo tasks con las propiedades text (el texto de la tarea) y completed (falso, porque la tarea recién agregada no está completada)
        taskInput.value = ""; // una vez que se ingreso el texto deja el campo vacio
        displayTasks();
    }
}

function displayTasks(){
    taskList.innerHTML = ""; // to clear the existing content within the taskList element by setting its innerHTML to an empty string
    // iterates through the tasks array using forEach, creating a list item <li> for each task
    tasks.forEach((task, index) => { 
        const li = document.createElement("li");
        // It constructs HTML content for each task by assigning it to li.innerHTML, which includes a checkbox, a label displaying the task text, and corresponding IDs
        li.innerHTML = `<input type= "checkbox" id="task-${index}" ${task.completed ? "checked": ""}>
        <label for= "task-${index}"> ${task.text}</label>`;
        // When the checkbox state changes, it triggers the toggleTask() function
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed; //Cambia el estado de la propiedad completed de la tarea seleccionada (de verdadero a falso o viceversa
    displayTasks();
}

function clearCompletedTasks(){
    tasks = tasks.filter(task => !task.completed);  // elimina las tareas que están completadas
    displayTasks();
}

function clearAllTasks(){
    tasks = [];
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllTasksBtn.addEventListener("click", clearAllTasks);
