// CLASSES
class Task {
    text : string;

    constructor(text : string){
        this.text = text; 
    }
}

class NormalTask extends Task {
    checkbox : boolean; 

    constructor(text : string, checkbox : boolean) {
        super(text); 
        this.checkbox = checkbox; 
    }
}

class CatTask extends Task { 
    url : string; 

    constructor(text : string, url : string) {
        super(text); 
        this.url = url;
    }
}

// CHECK IF TASK HAS "cat"
function isCat(text: string) {
    text = text.toLowerCase();
    return text.indexOf("cat") != -1; 
}

// ADD BUTTON EVENT LISTENER 
var todoList = document.querySelector("#todo-list")!; 
var addButton = document.querySelector("#add")!; 
var task = document.querySelector<HTMLInputElement>("#inputfield")!; 

task.addEventListener("keypress", addTask);  
addButton.addEventListener("click", addTaskToToDoList); 

// ADD TASK TO TO DO LIST
function addTaskToToDoList(): void {
    if(task.value.length > 0) {
        let newTask = document.createElement("li");
        let finalTask = document.createElement("label");

        let taskToBeAdded; 

        if(isCat(task.value)) {
            taskToBeAdded = new CatTask(task.value, "https://breakbrunch.com/wp-content/uploads/2019/06/cute-cat-with-big-eyes-041619-1.jpg");
            var img = document.createElement("img");
            img.src = taskToBeAdded.url;
            img.height = 30;
            img.width = 30;
            newTask.appendChild(img); 
        } else {
            taskToBeAdded = new NormalTask(task.value, false); 
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "todo-check";
            checkbox.addEventListener("click", tickDoneOnToDoList);
            newTask.appendChild(checkbox);
        }
        
        finalTask.appendChild(document.createTextNode(taskToBeAdded.text));
        finalTask.className = "todo";
        newTask.appendChild(finalTask);

        let newDeleteButton = document.createElement("button");
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
function addTask(event: KeyboardEvent): void {
    if(event.which === 13) {
        addTaskToToDoList();
    }
}

// DONE BUTTON EVENT LISTENER 
var doneButton = todoList.querySelectorAll(".todo-check");

for(let i = 0; i < doneButton.length; i++) {
    doneButton[i].addEventListener("click", tickDoneOnToDoList);
}

// TICK DONE FOR A TASK IN THE TO DO LIST
function tickDoneOnToDoList(event: Event): void {
    let checkboxElement = ( <HTMLElement>event.target );
    let parent = checkboxElement.parentElement!;
    parent!.querySelector(".todo")!.classList.toggle("done");
}

// DELETE BUTTON EVENT LISTENER 
var deleteButton = document.querySelectorAll("#delete");

for(let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deleteTaskFromToDoList);
}

// DELETE A TASK FROM THE TO DO LIST
function deleteTaskFromToDoList(event: Event): void {
    ( <HTMLElement>event.target ).parentElement!.remove();
}