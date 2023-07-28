// this is not a slider for section hero, but this pagination for section how we work.
const one = document.getElementById('stepOne');
const two = document.getElementById('stepTwo');
const three = document.getElementById('stepThree');
const four = document.getElementById('stepFour');

window.addEventListener('load', () => {
    one.classList.add('step-active');
  });

one.addEventListener('click',() => {
    one.classList.add('step-active');

    two.classList.remove('step-active');
    three.classList.remove('step-active');
    four.classList.remove('step-active');
});
two.addEventListener('click',() => {
    two.classList.add('step-active');

    one.classList.remove('step-active');
    three.classList.remove('step-active');
    four.classList.remove('step-active');
});
three.addEventListener('click',() => {
    three.classList.add('step-active');

    two.classList.remove('step-active');
    one.classList.remove('step-active');
    four.classList.remove('step-active');
});
four.addEventListener('click',() => {
    four.classList.add('step-active');

    two.classList.remove('step-active');
    three.classList.remove('step-active');
    one.classList.remove('step-active');
});