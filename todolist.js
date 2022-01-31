const form = document.querySelector("#form")
const todo = document.querySelector("#todo")
const inputText = document.querySelector("#inputText");
const btnSubmit = document.querySelector("#btnSubmit");
const btnClearAll = document.querySelector("#btnClearAll");

let data = [];

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

        data.push(inputText.value);

        todo.innerHTML = '';

        data.forEach((title, index) => {
            todo.innerHTML += `
            <div class='card' id=${index}>
            ${title}
            <button id='btnDelete'>Delete</button>
            <button id='btnDone'>DONE</button>
            <button id='btnEdit'>Edit</button>
            </div>
            `;   
        })
 
    form.reset();
});

todo.addEventListener('click', (event) => {
    if(event.target.id === 'btnDelete') {
        const card = event.target.closest('.card');
        const cardId = +card.id;

        data.splice(cardId, 1)

        todo.innerHTML = '';
        
        data.forEach((title, index) => {
            todo.innerHTML += `
            <div class='card' id=${index}>
            ${title}
            <button id='btnDelete'>Delete</button>
            <button id='btnDone'>DONE</button>
            <button id='btnEdit'>Edit</button>
            </div>
            `;   
        })
    }
});

todo.addEventListener('click', (event) => {
    if(event.target.id === 'btnDone') {
        const card = event.target.closest('.card');
        const cardId = +card.id;

        todo.innerHTML = '';
        
        data.forEach((title, index) => {
            todo.innerHTML += `
            <div class=`${index === cardId ? 'card dash'  : 'card'}` id=${index}>
            <strike>${title}</strike>
            <button id='btnDelete'>Delete</button>
            <button id='btnDone'>DONE</button>
            <button id='btnEdit'>Edit</button>
            </div>
            `;   
        })
    }
});
