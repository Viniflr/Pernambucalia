var btn_quinta = document.querySelector('#quinta');
var btn_sexta = document.querySelector('#sexta');

var cronograma = document.querySelector('#cronograma');
var cronograma2 = document.querySelector('#cronograma2');


btn_quinta.addEventListener('click', function(){


    if(cronograma2.style.display === 'block'){
        cronograma2.style.display = 'none';
    }

    if(cronograma.style.display === 'block'){
        cronograma.style.display = 'none';
    } else{
        cronograma.style.display = 'block';
    }


});


btn_sexta.addEventListener('click', function(){

    if(cronograma.style.display === 'block'){
        cronograma.style.display = 'none';
    } 

    if(cronograma2.style.display === 'none'){
        cronograma2.style.display = 'block';
    } else{
        cronograma2.style.display = 'none';
    }

});