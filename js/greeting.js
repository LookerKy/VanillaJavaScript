const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const SHOW_CN = "showing",
      USER_LS = "currentUser";


const saveName = (text) => {
    localStorage.setItem(USER_LS, text);
};

const handleSubmit = (event) => {
    event.preventDefault();
    const currentText = input.value;
    paintGreeting(currentText);
    saveName(currentText);
}

const askForName = () =>{
    form.classList.add(SHOW_CN);
    form.addEventListener("submit",handleSubmit);
}

const paintGreeting = (text) => {
    form.classList.remove(SHOW_CN);
    greeting.classList.add(SHOW_CN);
    greeting.innerText = `Hello ${text}`;

};

const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
};

const greetInit = () => {
    loadName();
};

greetInit();