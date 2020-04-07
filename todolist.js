// Class Implementing the interface
var Todo = (function () {
    function Todo(name, isDone) {
        this.name = name;
        this.isDone = isDone;
    }
    return Todo;
}());

// Class which contains list of Todos and the actions
var TodoLists = (function () {
    function TodoLists() {
    }

    TodoLists.prototype.updateTask = function() {
        this.isDone = !this.isDone;
    }

    //Create a new Todo Item
    TodoLists.prototype.createANewToDo = function (name) {
        var newToDo= new Todo(name, false);
        var totalCount = TodoLists.allTodos.push(newToDo);
        return totalCount;
    };

    // returns all the todos
    TodoLists.prototype.allTodo = function () {
        return TodoLists.allTodos;
    };
    
    return TodoLists;
}());

TodoLists.allTodos = new Array;

// window.onload is a pure JS
window.onload = function () {
    // HTMLInput Element for Task
    var task = document.getElementById("todoTaskName");
    // added a event listner for add click
    document.getElementById("add").addEventListener('click', function () { return toAlltask(task.value); });

    var todo = new TodoLists();
    if (Object.keys(todo.allTodo()).length > 0 && document.getElementById("tick")) {
        document.getElementById("tick").addEventListener("change", function () {terms_change(this); });
    }
};

//Function called when add is clicked
function toAlltask(task) {
    var todo = new TodoLists();
    // adds the task to list
    todo.createANewToDo(task);

    // Fetched the updated list and create a list item for UI
    var div = document.getElementById("todoLists");
    
    var list = "<br>";
    for (var index = 0; index < TodoLists.allTodos.length; index++) {    
        list += "<input type=\"checkbox\" id=\"tick\"";
        if (TodoLists.allTodos[index].isDone == true) {
            list += " checked ";
        }

        list += ">" + "\t" + TodoLists.allTodos[index].name + ' <br>';
    }

    div.innerHTML = list;

    document.getElementById("todoTaskName").value = "";
}

function terms_change(todo) {
    console.log(todo);
    if(todo.isDone == true){
        todo.isDone = false;
    } else {
        todo.isDone = true;
    }
}