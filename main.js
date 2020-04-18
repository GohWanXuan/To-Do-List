var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// CLASSES
var Task = /** @class */ (function () {
    function Task(text) {
        this.text = text;
    }
    return Task;
}());
var NormalTask = /** @class */ (function (_super) {
    __extends(NormalTask, _super);
    function NormalTask(text, checkbox) {
        var _this = _super.call(this, text) || this;
        _this.checkbox = checkbox;
        return _this;
    }
    return NormalTask;
}(Task));
var CatTask = /** @class */ (function (_super) {
    __extends(CatTask, _super);
    function CatTask(text, url) {
        var _this = _super.call(this, text) || this;
        _this.url = url;
        return _this;
    }
    return CatTask;
}(Task));
// CHECK IF TASK HAS "cat"
function isCat(text) {
    text = text.toLowerCase();
    return text.indexOf("cat") != -1;
}
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
        var finalTask = document.createElement("label");
        var taskToBeAdded = void 0;
        if (isCat(task.value)) {
            taskToBeAdded = new CatTask(task.value, "https://breakbrunch.com/wp-content/uploads/2019/06/cute-cat-with-big-eyes-041619-1.jpg");
            var img = document.createElement("img");
            img.src = taskToBeAdded.url;
            img.height = 30;
            img.width = 30;
            newTask.appendChild(img);
        }
        else {
            taskToBeAdded = new NormalTask(task.value, false);
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "todo-check";
            checkbox.addEventListener("click", tickDoneOnToDoList);
            newTask.appendChild(checkbox);
        }
        finalTask.appendChild(document.createTextNode(taskToBeAdded.text));
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
