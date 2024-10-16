function menuShow() {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon img'); // Seleciona a imagem do ícone

    menu.classList.toggle('show');

    // Verifica se o menu está visível e muda a imagem do ícone
    if (menu.classList.contains('show')) {
        menuIcon.src = './img/menu-fechar.png'; // Caminho para o ícone de fechar
    } else {
        menuIcon.src = './img/menu.png'; // Caminho para o ícone de menu
    }
}
