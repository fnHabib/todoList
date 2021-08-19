

// todoButton.addEventListener('click', addtodo);
let todoInput = document.querySelector('.inpuItem');
let todoButton = document.querySelector('.todo-btn');
let todoList = document.querySelector('.todo-ul-list');


function addtodo(event){
   


    let tododiv = document.createElement('div');
    tododiv.classList.add('todo');

    let todoli = document.createElement('li');
    todoli.classList.add('itemli');
    todoli.innerHTML=todoInput.value;
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
    todoInput.value="";

}
    todoList.addEventListener('click',deleteCheck);

    function deleteCheck(e){
       let item = e.target;
       if(item.classList[0] === "trash" ){
           let todo = item.parentElement;
           todo.remove(); 
       }

       if(item.classList[0] === "completed"){
           let todo = item.parentElement;
           todo.classList.toggle('complete');


       }
    }