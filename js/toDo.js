const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

const saveToDos = () => {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};

const handelDeleteToDo = (event) =>{
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //filer todo.id가 선택된 li.id와 같지 않은것만 리턴 즉 클릭된 li는 todo에있는 id와 일치하는것만 삭제된다.
    const cleanToDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    toDos = cleanToDos;
    saveToDos();
};

const paintToDos = (text) => {
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    delbtn.innerText = "❌";
    delbtn.addEventListener("click", handelDeleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delbtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDosObj = {
        text : text,
        id : newId
    };
    toDos.push(toDosObj);
    saveToDos();
};

const handleToDoSumbit = (event) =>{
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDos(currentValue);
    toDoInput.value = "";
};

const loadToDos = () => {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null){
        const parseToDos = JSON.parse(loadToDos);
        parseToDos.forEach((toDo) => {
            console.log(toDo.text);
            paintToDos(toDo.text);
        });
    }
};

const toDoInit = () =>{
    loadToDos();
    toDoForm.addEventListener("submit",handleToDoSumbit);
};

toDoInit();