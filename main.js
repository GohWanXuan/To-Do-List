// ADD BUTTON EVENT LISTENER 
var todoList = document.querySelector("#todo-list");
var addButton = document.querySelector("#add");
var task = document.querySelector("#inputfield");
task.addEventListener("keypress", addTask);
addButton.addEventListener("click", addTaskToToDoList);
// ADD TASK TO TO DO LIST
function addTaskToToDoList() {
    if (task.value.length > 0) {
        var newTask = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "todo-check";
        checkbox.addEventListener("click", tickDoneOnToDoList);
        newTask.appendChild(checkbox);
        var finalTask = document.createElement("label");
        finalTask.appendChild(document.createTextNode(task.value));
        finalTask.className = "todo";
        newTask.appendChild(finalTask);
        var newDeleteButton = document.createElement("button");
        newDeleteButton.appendChild(document.createTextNode("delete"));
        newDeleteButton.className = "btn btn-outline-warning";
        newDeleteButton.setAttribute("id", "delete");
        newDeleteButton.addEventListener("click", deleteTaskFromToDoList);
        newTask.appendChild(newDeleteButton);
        newTask.appendChild(document.createElement("BR"));
        newTask.appendChild(document.createElement("BR"));
        todoList.appendChild(newTask);
        task.value = "";
    }
}
// ADD TASK TO TO DO LIST WHEN USER PRESS ENTER
function addTask(event) {
    if (event.which === 13) {
        addTaskToToDoList();
    }
}
// DONE BUTTON EVENT LISTENER 
var doneButton = todoList.querySelectorAll(".todo-check");
for (var i = 0; i < doneButton.length; i++) {
    doneButton[i].addEventListener("click", tickDoneOnToDoList);
}
// TICK DONE FOR A TASK IN THE TO DO LIST
function tickDoneOnToDoList(event) {
    var checkboxElement = event.target;
    var parent = checkboxElement.parentElement;
    parent.querySelector(".todo").classList.toggle("done");
}
// DELETE BUTTON EVENT LISTENER 
var deleteButton = document.querySelectorAll("#delete");
for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deleteTaskFromToDoList);
}
// DELETE A TASK FROM THE TO DO LIST
function deleteTaskFromToDoList(event) {
    event.target.parentElement.remove();
}
