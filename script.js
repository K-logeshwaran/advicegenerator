const advice = document.getElementById("advice");
const id = document.getElementById("id");

async function fetchAdvice(){
    let res = await fetch("https://api.adviceslip.com/advice");
    console.log(res);
    let data = await res.json()
    let utterance = new SpeechSynthesisUtterance(data.slip.advice);
    advice.textContent =  formatAdvice(data.slip.advice);
    id.textContent =  formatId(data.slip.id)
    window.speechSynthesis.speak(utterance);
    console.log(data.slip);
}

const formatAdvice =(advice)=> '"'+advice+'"';
const formatId = id => "# "+id;

let obj ={
    name : "buni",
    age:21,
    skills :["Best dev ","Bank Manager"]
}

console.log(obj);
console.log(JSON.stringify(obj));



let str = JSON.stringify(obj)
console.log(JSON.parse(str));

