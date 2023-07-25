// this is not a slider for section hero, but this pagination for section how we work.
const one = document.getElementById('stepOne');
const two = document.getElementById('stepTwo');
const three = document.getElementById('stepThree');
const four = document.getElementById('stepFour');

const title = document.getElementById('titleHowWeWork');
const text = document.getElementById('textHowWeWork');

const img = document.getElementById('imgHowWork');

one.addEventListener('click',() => {
    one.classList.add('step-active');

    two.classList.remove('step-active');
    three.classList.remove('step-active');
    four.classList.remove('step-active');

    title.textContent = "Проводим консультацию";
    text.textContent = `Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.`
 
})