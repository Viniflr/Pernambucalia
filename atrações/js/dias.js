var cronograma_quinta = document.querySelector('#cronograma_quinta');
var cronograma_sexta = document.querySelector('#cronograma_sexta');

function mudar_quinta()
{
    //Aparecendo quinta e sumindo sexta
    cronograma_quinta.style.display = 'block';
    cronograma_sexta.style.display = 'none';
}

function mudar_sexta()
{
    //Aparecendo sexta e sumindo quinta
    cronograma_quinta.style.display = 'none';
    cronograma_sexta.style.display = 'block';
}