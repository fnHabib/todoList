

// todoButton.addEventListener('click', addtodo);
let todoInput = document.querySelector('.inpuItem');
let todoButton = document.querySelector('.todo-btn');
let todoList = document.querySelector('.todo-ul-list');
let filterOption = document.querySelector('.filter-todo');


function addtodo(event){
   


    let tododiv = document.createElement('div');
    tododiv.classList.add('todo');

    let todoli = document.createElement('li');
    todoli.classList.add('itemli');
    todoli.innerHTML=todoInput.value;
    tododiv.append(todoli);

    saveLocalTodos(todoInput.value);
    
   
    let completedButton = document.createElement('button');
    completedButton.classList.add('completed');
    completedButton.innerHTML='<i class="fas fa-check-square"></i>';
    tododiv.append(completedButton);

    let trashButton = document.createElement('button');
    trashButton.classList.add('trash');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    tododiv.append(trashButton);

    todoList.append(tododiv);
    todoInput.value="";

}
    todoList.addEventListener('click', deleteCheck);
    filterOption.addEventListener('click', filterTodo);
    document.addEventListener("DOMContentLoaded" ,getTodos);


    function deleteCheck(e){
       let item = e.target;
       if(item.classList[0] === "trash" ){
           let todo = item.parentElement;
           todo.classList.add('fall');
           removeLocalTodos(todo);
           todo.addEventListener('transitionend', function(){
            todo.remove(); 
           });
           
       }

       if(item.classList[0] === "completed"){
           let todo = item.parentElement;
           todo.classList.toggle('complete');


       }
    }

    function filterTodo(e){
        let todos = todoList.childNodes;
        todos.forEach(function(todo){
            switch(e.target.value){
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if(todo.classList.contains("complete")){
                        todo.style.display = "flex";
                    } 
                    else{
                        todo.style.display = "none";
                    }
                    break;
                    case "uncompleted":
                        if(!todo.classList.contains('complete')){
                            todo.style.display = "flex";
                        }else{
                            todo.style.display = "none";
                        }
                        break;
            }

        });
    }

    function saveLocalTodos(todo){
       
        let todos;
        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function getTodos(){

        let todos;

        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        todos.forEach(function(todo){



            let tododiv = document.createElement('div');
    tododiv.classList.add('todo');

    let todoli = document.createElement('li');
    todoli.classList.add('itemli');
    todoli.innerHTML= todo;
    tododiv.append(todoli);

    let completedButton = document.createElement('button');
    completedButton.classList.add('completed');
    completedButton.innerHTML='<i class="fas fa-check-square"></i>';
    tododiv.append(completedButton);

    let trashButton = document.createElement('button');
    trashButton.classList.add('trash');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    tododiv.append(trashButton);

    todoList.append(tododiv);

        });
    }

    function removeLocalTodos(todo){
        let todos;

        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        let todoIndex = todo.children[0].innerText;
        todos.splice(todos.indexOf(todoIndex), 1);
        localStorage.setItem("todos", JSON.stringify(todos));

    }