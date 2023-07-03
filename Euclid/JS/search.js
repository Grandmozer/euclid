function search(){
const inputSearch = document.getElementById("input-search");
    closeSearch = document.getElementById("close-search");
    btnSearch = document.getElementById("btn-search");
    formSearch = document.getElementById("form-search");
    burger = document.getElementById("burger");
    logoHeader = document.getElementById("logoHeader");
    // information = document.querySelectorAll('.s');

btnSearch.addEventListener('click', () => {
  inputSearch.classList.add('input-search-active');
  inputSearch.classList.remove('input-search');
  formSearch.classList.remove('search-off');    
  formSearch.classList.add('search-active');
  closeSearch.classList.add('btn-close-search-active');
  // FindOnPage('text-to-find');

  if(window.matchMedia("(max-width: 768px)").matches){
    logoHeader.classList.add('do-not-display');
  }  
  if(window.matchMedia("(max-width: 550px)").matches){
    burger.classList.add('do-not-display');
  }
});
closeSearch.addEventListener('click', () => {
    inputSearch.classList.remove('input-search-active');
    inputSearch.classList.add('input-search');
    formSearch.classList.add('search-off');    
    formSearch.classList.remove('search-active');
    closeSearch.classList.remove('btn-close-search-active');
    logoHeader.classList.remove('do-not-display');
    burger.classList.remove('do-not-display');
    
    inputSearch.value = '';
});
// inputSearch.addEventListener('keyup',()=>
// {if (e.keyCode === 13) {
//   if(inputSearch.value = ''){
//     return
//   }else{
//     searchFunction(inputSearch.value);
//   }
// }
// })
// let searchFunction=(text)=>{
//   information.forEach((element)=>{
//   if(element.textContent==text){
//     element.classList.add('found-match');
//     console.log(element);}
//   })

// }
// var lastResFind=""; // последний удачный результат
// var copy_page=""; // копия страницы в ихсодном виде
// function TrimStr(s) {
//      s = s.replace( /^\s+/g, '');
//   return s.replace( /\s+$/g, '');
// }
// function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
//   var obj = window.document.getElementById(inputId);
//   var textToFind;
 
//   if (obj) {
//     textToFind = TrimStr(obj.value);//обрезаем пробелы
//   } else {
//     alert("Введенная фраза не найдена");
//     return;
//   }
//   if (textToFind == "") {
//     alert("Вы ничего не ввели");
//     return;
//   }
 
//   if(document.body.innerHTML.indexOf(textToFind)=="-1")
//   alert("Ничего не найдено, проверьте правильность ввода!");
 
//   if(copy_page.length>0)
//         document.body.innerHTML=copy_page;
//   else copy_page=document.body.innerHTML;

 
//   document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");//стираем предыдущие якори для скрола
//   document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:red'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем;
//   lastResFind=textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
//   window.location = '#'+textToFind;//перемещаем скрол к последнему найденному совпадению
//  }
}
search();
