function hiden (){

const text =  document.querySelectorAll(".question-text");

// Ох, прошу прощения за такую мерзость в коде. Но мне хотелось быстрее закончить сайт, поэтому ctrl+C ctrl+V.

const oneBtn = document.getElementById('oneLine');
const twoBtn = document.getElementById("twoLine");
const threeBtn = document.getElementById("threeLine");
const fourBtn = document.getElementById("fourLine");
const fiveBtn = document.getElementById("fiveLine");

const oneText = document.getElementById("oneText");
const twoText = document.getElementById("twoText");
const threeText = document.getElementById("threeText");
const fourText = document.getElementById("fourText");
const fiveText = document.getElementById("fiveText");

const point =  document.querySelectorAll(".trigger");
// const question = document.getElementById("question");

text.forEach(element => element.classList.add('do-not-display'));

oneBtn.addEventListener('click', () => {
    oneText.classList.toggle('do-not-display');
});
twoBtn.addEventListener('click', () => {
    twoText.classList.toggle('do-not-display');
});
threeBtn.addEventListener('click', () => {
    threeText.classList.toggle('do-not-display');
});
fourBtn.addEventListener('click', () => {
    fourText.classList.toggle('do-not-display');
});
fiveBtn.addEventListener('click', () => {
    fiveText.classList.toggle('do-not-display');
});

// var point = document.querySelectorAll(".trigger");
// for(var i=0; i<point.length;i++){
//     // point[i].addEventListener('click', selectDate);
//     point[i].addEventListener('click', removeSelectClass);
//     point[i].addEventListener('click', () => {console.log(text[i])});
// }

// function removeSelectClass(){
//     arrText[i].classList.contains('do-not-display');
//     text[i].classList.remove('do-not-display');
// }


  // document.querySelectorAll('.trigger').forEach(function(el){
    //     el.addEventListener('click',function(event){
    //         console.log(event)
    //         event.target.classList.toggle('do-not-display');

    //     })
    // })
}

hiden();