document.getElementById('sim').addEventListener('click', function() {
    // Aqui você pode mudar o link da música
    window.location.href = "https://youtu.be/HpphFd_mzXE?t=132";
});

document.getElementById('nao').addEventListener('click', function() {
    desvia(this);
});

// JavaScript para mover o botão 'Não' para uma posição aleatória na página
function desvia(button) {
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;
    const newX = Math.random() * (bodyWidth - button.offsetWidth);
    const newY = Math.random() * (bodyHeight - button.offsetHeight);
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}
