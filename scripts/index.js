

const STORAGE_KEY= "todos";

let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const listEl = document.querySelector('#todo-lists');


todos.forEach((todo, index) => {
    const liEl = document.createElement('li');
    liEl.setAttribute('id', `listitem-${index}`);

    liEl.innerText = todo.value;

    if(todo.checked){
        liEl.classList.add("completed");
    }

    listEl.appendChild(liEl);

    liEl.addEventListener('click', (event) => {
        todos[index] = {value: todo.value, checked: !todo.checked}

        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));

        window.location.reload();

    })
})


const handleSubmit = () => {
    const inputEl = document.getElementById("item-input");
    const inputValue = inputEl.value.trim();
s
    if(inputValue != ""){
        todos.push({value: inputValue, checked: true});
        inputEl.value="";
    
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
}

// function handleAdd() {
//     const inputEl = document.getElementById("item-input");

//     if(inputEl != ""){
//         todos.push(inputEl.value);
//         inputEl.value="";
    
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
//     }


// }



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