// Interface to define Todo (abstract)
interface InterfaceTodo {
    name : string;
    isDone : boolean;
}

// A concrete class to override the interface
class Todo implements InterfaceTodo {
    public name : string;
    public isDone : boolean;
    constructor(name : string, isDone : boolean){
        this.name = name;
        this.isDone = isDone;
    }
}

// Class which create a new to do and get all the to do tasks
class TodoLists {
    public static allTodos: Todo[]= new Array;

    // create a new to do task
    createANewToDo(name : string) : number {
        let newToDo = new Todo(name, false); // a new to do will have isDone set as "false"
        let totalCount: number = TodoLists.allTodos.push(newToDo);
        return totalCount;
    }

    // get all the to do tasks
    allTodo():Todo[]{
        return TodoLists.allTodos;
    }
}

// window.onload 
window.onload = function(){
    // HTMLInput Element for to do task name
    let task= <HTMLInputElement>document.getElementById("todoTaskName");
    // an event listner to listen for "clicking" the add button
    document.getElementById("add").addEventListener('click',()=>toAlltask(task.value));  
    
    let update = <HTMLInputElement>document.getElementById("tick");
    let todo = new TodoLists();
    if (Object.keys(todo.allTodo()).length > 0 && update != null) {
        document.getElementById("tick").addEventListener("change", function () {terms_change(this); });
    }
}

// when an event listener know that the "add" button is click, the below function is carried out
function toAlltask(task:string){

    let todo = new TodoLists();

    // add the new task to list
    todo.createANewToDo(task);

    // Fetched the updated list and create a new task list so that it can be displayed in the UI
    let div = <HTMLDivElement>document.getElementById("todoLists");
    let list = "<br>";

    for(let index=0; index < TodoLists.allTodos.length;index++){
        console.log(TodoLists.allTodos[index]);
        list += "<input type=\"checkbox\" id=\"tick\"";
        if (TodoLists.allTodos[index].isDone == true) {
            list += " checked ";
        }

        list += ">" + "\t" + TodoLists.allTodos[index].name + ' <br>';
    }
    div.innerHTML = list;

    // Casting
    (<HTMLInputElement>document.getElementById("todoTaskName")).value = "";    
}

function terms_change(todo:Todo){
    if(todo.isDone == false) {
        todo.isDone = true;
    } else {
        todo.isDone = false;
    }
}