function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var newTask = document.createElement("li");
        newTask.textContent = taskInput.value;
        taskList.appendChild(newTask);
        taskInput.value = ""; // Clear the input field
    }
}

// Bonus: Remove task on click
document.getElementById("taskList").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});
