function hiden (){
const text =  document.querySelectorAll(".question-text");
const point =  document.querySelectorAll(".point-icon");

text.forEach(element => element.classList.add('do-not-display'));

point.forEach(element => element.addEventListener('click', () => {
    for (let i = 0; i < point.length; i++){
        console.log(element);
    }
}))
}
hiden();