alert("IMG ES6");




//objec , Array

const kyInfo = {
    name : "ky",
    age : 29,
    gendre : "male",
    isHansome : true,
    favoritMovie : ["신과함께", "예스맨","어벤저스"],
    favoritFood : [{name:"제육볶음", isFatty:true}, {name: "감자탕", isFatty : false, what: "soup"}]
};

console.log(kyInfo);
console.log(typeof(kyInfo));

const dayOfWeek = ["Mon","Tue", "Wen"];

console.log(dayOfWeek);

dayOfWeek[2] = "thu";

console.log(dayOfWeek);

//원하는 key value를 껴넣을 수있다 .
kyInfo.Ex = "ee";

console.log(kyInfo);

//function 

const sayHello = (name, age) => {
    const say = `Hello! ${name}, you have ${age} years old`;
    return say;
};
const greetYou = sayHello("규영", 29);

console.log(greetYou);

const culculator = {
    plus : function(a,b){
        return a+b;   
    },
    minus : (a,b) => {
        return a - b;
    },
    divide : (a, b) => {
        return a / b;
    },
    multifly : (a, b) => {
        return a*b;
    },
    pow : ( a, b ) => {
        return a**b;
    },
    reminder : (a, b) => {
        return a % b;
    }
};
const a = 6 , b= 3;
const plus = culculator.plus(a,b);
const minus = culculator.minus(a,b); 
const divide = culculator.divide(a,b);
const multifly = culculator.multifly(a,b);
const pow = culculator.pow(a,b);
const reminder = culculator.reminder(a,b);

console.log(`${a} + ${b} = ${plus} , ${a} - ${b} = ${minus} , ${a} / ${b} = ${divide} , ${a} * ${b} = ${multifly} , ${a} ** ${b} = ${pow} , ${a} % ${b} = ${reminder} , `);

//DOM(document object module) functi(on
const title = document.querySelector("#title");

// title.innerHTML = "Hello from JS";
document.title = "i own you now"
console.dir(title);

//event , event handler
const handleResize= () => {
    console.log("i've been resized");
}
//핸들러를 등록할때는 뒤에 () 를 붙이지 않는다 붙이면 , listener가 바로 작동함 특정 동작일 때 작동하게 하고싶으면 ()를 붙이지 말 것.
window.addEventListener("resize", handleResize);

const BASE_COLOR = "rgb(54, 69, 84)";
const OTHER_COLOR = "rgb(255, 118, 117)";

const handleClick = () => {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
};

const test = document.querySelector(".test");

console.dir(test);

const CLICKED_CLASS = "clicked";

const handleClicked = () =>{
    const hasClass = test.classList.contains(CLICKED_CLASS);
    console.log(hasClass);
    if(!hasClass){
        test.classList.add(CLICKED_CLASS);
    }else{
        test.classList.remove(CLICKED_CLASS);
    }
}

const init = () => {
    title.style.color = BASE_COLOR; 
    title.addEventListener("click",handleClick);
    test.addEventListener("click", handleClicked);
};

init();
