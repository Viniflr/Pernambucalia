//Variaveis globais
let slideIndex = 0; //<-Indice de passagem do slide
const IMAGENS = ["/assets/evento/img/foto-1.png", "/assets/evento/img/foto-2.png", "/assets/evento/img/foto-3.png", "/assets/evento/img/foto-4.png"]; //<-Array com TODAS as imagens
const GLOBAL_IDENTFIER = "div-image-description-localizer-content-"; //<<----Variavel importante para identificação das DIVS
const COLORS = ["#999999","#b8b8b8"]; //<--Dicionario de cores! 0 = ON, 1 = OFF

//Iniciando os slides
function initSlide()
{
    //Colocando a 1º imagem do array na tag
    document.getElementById("carrossel-imagem-principal").src = IMAGENS[slideIndex];

    //Mudando as outras imagens
    //Imagem anterior
    document.getElementById("carrossel-imagem-previous").src = IMAGENS[IMAGENS.length-1];
    //Proxima imagem
    document.getElementById("carrossel-imagem-next").src = IMAGENS[slideIndex+1];

    //Criando tamanho dos botões dinamicamente
    for(let i = 0; i < IMAGENS.length; i++)
    {
        //Criando a "div" que vai servir como coisa que passa
        let div = document.createElement("div");
        //Adicionando a devida classe a div
        div.classList.add("div-image-description-localizer-content-content");
        //Setando o id da tag div criada automaticamente! PARTE MUITO IMPORTANTE PARA IDENTIFICAÇÃO FUTURA!
        div.id = GLOBAL_IDENTFIER+i;
        //Adicionando essa div no html dentro do container certo
        document.getElementById("div-image-description-localizer-content").insertAdjacentElement("beforeend", div);
    }

    //Mudando o botão de baixo
    document.getElementById(GLOBAL_IDENTFIER+slideIndex).style.backgroundColor = COLORS[0];
}

//Função do slide anterior
function previousSlide()
{
    //Setando o botão ON para OFF
    document.getElementById(GLOBAL_IDENTFIER+slideIndex).style.backgroundColor = COLORS[1];

    //Incrementando o indice do slide
    slideIndex--;
    //Verificando as extremidades do slider
    if (slideIndex < 0) {slideIndex = IMAGENS.length-1;} //Se for maior que o numero de slides, volte para o 1º

    //Setando a nova imagem no carrosel
    let carrossel = document.getElementById("carrossel-imagem-principal");
    carrossel.src = IMAGENS[slideIndex]; //Colocando a imagem na tag

    //Mudando as outras imagens
    //Imagem anterior
    document.getElementById("carrossel-imagem-previous").src = slideIndex == 0 ? IMAGENS[IMAGENS.length-1] : IMAGENS[slideIndex-1];
    //Proxima imagem    
    document.getElementById("carrossel-imagem-next").src = slideIndex >= IMAGENS.length ? IMAGENS[0] : IMAGENS[slideIndex+1];

    //Mudando o botão de baixo
    document.getElementById(GLOBAL_IDENTFIER+slideIndex).style.backgroundColor = COLORS[0];
}

//Função do proximo slide
function nextSlide() {
    console.log("Indicie: "+slideIndex);
    //Setando o botão ON para OFF
    document.getElementById(GLOBAL_IDENTFIER+slideIndex).style.backgroundColor = COLORS[1];

    //Incrementando o indice do slide
    slideIndex++;
    //Verificando as extremidades do slider de acordo com a sincronização com um array!
    if (slideIndex >= IMAGENS.length) {slideIndex = 0;} //Se for maior que o numero de slides, volte para o 1º

    //Setando a nova imagem no carrosel
    document.getElementById("carrossel-imagem-principal").src = IMAGENS[slideIndex];
    let carrossel = document.getElementById("carrossel-imagem-principal");
    carrossel.src = IMAGENS[slideIndex]; //Colocando a imagem na tag

    //Mudando as outras imagens
    //Imagem anterior
    document.getElementById("carrossel-imagem-previous").src = slideIndex == 0 ? IMAGENS[IMAGENS.length-1] : IMAGENS[slideIndex-1];
    //Proxima imagem    
    document.getElementById("carrossel-imagem-next").src = slideIndex >= IMAGENS.length ? IMAGENS[0] : IMAGENS[slideIndex+1];

    //Mudando o botão de baixo
    document.getElementById(GLOBAL_IDENTFIER+slideIndex).style.backgroundColor = COLORS[0];
  }