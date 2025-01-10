// Referencias a los elementos del DOM
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskContainer = document.getElementById("taskContainer");

// Función para agregar una tarea
addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement("li");

    // Texto de la tarea
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    // Botón para eliminar
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => {
        taskItem.remove();
    });
    taskItem.appendChild(deleteButton);

    // Marcar como completada al hacer clic
    taskSpan.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    // Agregar la tarea a la lista
    taskContainer.appendChild(taskItem);

    // Limpiar el campo de entrada
    taskInput.value = "";
});
