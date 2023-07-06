window.addEventListener('DOMContentLoaded',function(){
    document.getElementById('burger').addEventListener('click', function(){
        document.getElementById('menu').classList.toggle('is-active');
        console.log(document.getElementById('menu'))
    });
  
}) 