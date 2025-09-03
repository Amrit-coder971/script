const STORAGE_KEY= "todos";

let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const listEl = document.querySelector('#todo-lists');

const  list = document.querySelector("#todo-list");

todo.forEach(todo,index) => { 
    const liEl= document.createElementNS("Li");
    liEl.setAttribute(`id`,`listitem-$(index)`);
    liEl.innerText = todo.value;

    if(todo.checked){
        liEl.classList.add("completed");
    }

}










// function handleAdd() {
   //  const inputEl = document.getElementById("item-input");


    if(inputEl != ""){
        todos.push(inputEl.value);
        inputEl.value="";
    
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    
        listEl.innerHTML = 
        `${todos.map(todo => 
        `<li id="todo-${todos.indexOf(todo)}"> ${todo} 
        </li>`)}`; 
    }







const togglerEl = document.getElementById("mode-toggler");

togglerEl.addEventListener("click", function(event){
    const isDarkMode = document.body.classList.contains("dark-mode");
    
    if(isDarkMode){
        document.body.setAttribute('class', 'light-mode');
        togglerEl.innerText = "Change to dark mode";
    } else {
        document.body.setAttribute('class', 'dark-mode');
        togglerEl.innerText = "Change to light mode";
    }
});

