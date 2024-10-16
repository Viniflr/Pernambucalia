let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function mostrar_conteudo_dropdown(valor) {
  const numeracao = ["RM", "ZM", "AG", "SE", "SF"];

  let descricao = '';

  // for (var i = 0; i < numeracao.length; i++) {
  //   document.getElementById(numeracao[i]).innerText = descricao;
  // }
  
  for (let i = 0; i < numeracao.length; i++) {
      if (numeracao[i] !== valor) {
          document.getElementById(numeracao[i]).innerText = '';
      }
  }

  if (valor == "RM") {descricao = `<p>A região metropolitana do Recife é composta por 15 municípios e é lar de 42,7% da população pernambucana, possuindo mais de 3,7 milhões de habitantes. Ela é a segunda maior região metropolitana do Norte-Nordeste e a sétima maior do Brasil.  <a id="mais-detalhes-rm" href="https://www2.recife.pe.gov.br/pagina/cultura#:~:text=O%20Recife%20%C3%A9%20o%20celeiro,maxixe%20e%20elementos%20da%20capoeira.">Mais detalhes</a> </p>`}
  else if (valor == "ZM") {descricao = `<p>É uma das regiões mais férteis de Pernambuco e lá foram introduzidos os primeiros engenhos de açúcar no século XVI. Sua principal atividade econômica é a agroindústria canavieira, presente desde a época da colonização. 
      Também tem importância na produção calçadista (de calçados), artesanal e na produção de açúcar e álcool. <a id="mais-detalhes-zm" href="https://www.bahia.ws/categoria/nordeste-brasil/pernambuco-guia-turismo/zona-da-mata/">Mais detalhes</a> </p>`}
  else if (valor == "AG") {descricao = `<p>Localizado entre a Zona da Mata e o Sertão, o Agreste se divide em Meridional, Central e Setentrional. Caruaru, "A Capital do Forró", é um polo de artesanato, famoso pelas cerâmicas de barro vermelho, decoradas com desenhos geométricos e cenas cotidianas. Além disso, o Agreste se destaca pela produção têxtil e agrícola, com destaque para milho, algodão e palma. <a id="mais-detalhes-ag" href="https://www.cultura.pe.gov.br/pagina/festival-pernambuco-nacao-cultural/edicoes/fpnc-agreste-central/">Mais detalhes</a> </p>`}
  else if (valor == "SE") {descricao = `<p>Assim como a mesorregião do São Francisco, o clima é predominantemente árido mas, diferente dele, o Sertão não tem nenhum grande rio permanente próximo para permitir um maior uso da água. <a id="mais-detalhes-se" href="https://www-bahia-ws.translate.goog/guia-turismo-sertao-de-pernambuco/?_x_tr_sl=pt&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc">Mais detalhes</a> </p>`}
  else if (valor == "SF") {descricao = `<p>Fica no centro-sul de Pernambuco, circundada pela margem esquerda do rio São Francisco. Na sua porção mais seca, a economia predomina com a pecuária bovina extensiva de corte. Na porção sul, mais perto do rio, são produzidas culturas irrigadas, o que incentiva a instalação de agroindústrias na região. <a id="mais-detalhes-sf" href="https://pt.wikipedia.org/wiki/Vale_do_S%C3%A3o_Francisco">Mais detalhes</a> </p>`}

  const elemento = document.getElementById(valor);
  if (elemento.innerHTML === '') {
      elemento.innerHTML = descricao;
  } else {
      elemento.innerHTML = '';
  }
}