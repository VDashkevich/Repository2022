
const form = document.querySelector("#form")
const todo = document.querySelector("#todo")
const inputText = document.querySelector("#inputText");
const btnSubmit = document.querySelector("#btnSubmit");
const btnClearAll = document.querySelector("#btnClearAll");
const modal = document.querySelector("#modal");

const addCard = () => {
    todo.innerHTML = '';

    data.forEach((task) => {
        todo.innerHTML += `
        <div class='${task.done ? 'card carddash'  : 'card'}' id=${task.id}>
        <span class="title">${task.title}</span> 
        <div class = "cardButtons">
        <button class='btnDelete'>Delete</button>
        <button class='btnDone'>DONE</button>
        <button class='btnEdit'>Edit</button>
        </div>
        </div>
        `;   
    })
}




let data = [];

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

        data.push({title: inputText.value, done: false, id: Date.now()});

    addCard();
 
    form.reset();
});

btnClearAll.addEventListener('click', (event) => {
    event.preventDefault();

    data = [];
    todo.innerHTML = "";
});

todo.addEventListener('click', (event) => {
    if(event.target.classList.contains("btnDelete")) {
        const card = event.target.closest('.card');
        const cardId = +card.id;

        const cardIndexInData = data.findIndex((task) => task.id === cardId);
        
        data.splice(cardIndexInData, 1);

        addCard();
    }
});

todo.addEventListener('click', (event) => {
    if(event.target.classList.contains("btnDone")) {
        const card = event.target.closest('.card');
        const cardId = +card.id;
        const cardIndexInData = data.findIndex((task) => task.id === cardId);
        
        data[cardIndexInData].done = !data[cardIndexInData].done;

        addCard();
    }

        if(event.target.classList.contains("btnEdit")) {
            modal.classList.add("visible");
    }
});

todo.addEventListener('click', (event) => {
    if(event.target.classList.contains("btnEdit")) {
        const card = event.target.closest('.card');
        const title = card.querySelector(".title");
        const info = title.textContent;
        const inputmodal = modal.querySelector(".inputTextModal");
        inputmodal.value = info;
        inputmodal.id = card.id;
        modal.classList.add("visible");
   }
});

modal.addEventListener('click', (event) => {
    if(event.target.classList.contains("btnClose")) {
        modal.classList.remove("visible");
    }
});

modal.addEventListener('click', (event) => {
    event.preventDefault();
        if(event.target.classList.contains("btnOK")) {
        const inputmodal = modal.querySelector(".inputTextModal");
        const inputId = +inputmodal.id;
        const cardIndexInData = data.findIndex((task) => task.id === inputId);
        const el = data[cardIndexInData]            
        data.splice(cardIndexInData, 1, {
            ...el,
            title: inputmodal.value
        });
        addCard();
        modal.classList.remove("visible");
        
    }
});
