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

function mostrar_conteudo_dropdown(valor){
  const numeracao = ["RM", "ZM", "AG", "SE", "SF"];

  let descricao = '';

  for (var i = 0; i < numeracao.length; i++) {
    document.getElementById(numeracao[i]).innerText = descricao;
  }

  if (valor == "RM") {descricao = `<p>O termo "Leão do Norte" é popularmente associado ao Hino de Pernambuco, que exalta o estado como um baluarte de coragem e liderança no Nordeste brasileiro. No hino, há uma menção ao "Leão do Norte", que representa a força e a bravura do povo pernambucano.</p>`}
  else if (valor == "ZM") {descricao = `<p>É uma das regiões mais férteis de Pernambuco e lá foram introduzidos os primeiros engenhos de açúcar no século XVI. Sua principal atividade econômica é a agroindústria canavieira, presente desde a época da colonização. Também tem importância na produção calçadista (de calçados), artesanal e na produção de açúcar e álcool.</p>`}
  else if (valor == "AG") {descricao = `<p>Localizado numa zona de transição entre a Zona da Mata e o Sertão, se divide em Agreste Meridional, Agreste Central e Agreste Setentrional. Caruaru, conhecida como “A Capital do Forró”, é um importante polo de produção de artesanato. A cidade é famosa pelas produções de cerâmica em barro vermelho e suas peças são feitas à mão e decoradas com desenhos geométricos e cenas do cotidiano. Além disso, no Agreste também há grande produção de produtos têxteis e agricultura principalmente de produtos mais tradicionais, como o milho, o algodão e a palma.</p>`}
  else if (valor == "SE") {descricao = `##`}
  else if (valor == "SF") {descricao = `<p>Fica no centro-sul de Pernambuco, circundada pela margem esquerda do rio São Francisco. Na sua porção mais seca, a economia predomina com a pecuária bovina extensiva de corte. Na porção sul, mais perto do rio, são produzidas culturas irrigadas, o que incentiva a instalação de agroindústrias na região.</p>`}

  document.getElementById(valor).innerHTML = descricao;
}