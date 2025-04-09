// Seleciona os elementos
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

// Função para alternar o menu
function toggleMenu() {
    const isOpen = navLinks.classList.toggle('active');
    
    // Alterna entre ícone de menu e close
    const icon = menuButton.querySelector('.material-icons');
    icon.textContent = isOpen ? 'close' : 'menu';
    
    // Bloqueia/libera o scroll da página
    body.style.overflow = isOpen ? 'hidden' : 'auto';
}

// Fecha o menu ao clicar em um link
function closeMenu() {
    navLinks.classList.remove('active');
    menuButton.querySelector('.material-icons').textContent = 'menu';
    body.style.overflow = 'auto';
}

// Event Listeners
function initMenu() {
    if (menuButton && navLinks) {
        menuButton.addEventListener('click', toggleMenu);
        
        // Fecha o menu ao clicar nos links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        // Fecha o menu ao clicar fora (opcional)
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
                closeMenu();
            }
        });
    }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initMenu);

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carrossel-item');
    const indicadores = document.querySelectorAll('.indicador');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    
    function showItem(index) {
        items.forEach(item => item.classList.remove('active'));
        indicadores.forEach(ind => ind.classList.remove('active'));
        
        items[index].classList.add('active');
        indicadores[index].classList.add('active');
        currentIndex = index;
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        let newIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        let newIndex = (currentIndex + 1) % items.length;
        showItem(newIndex);
    });
    
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            showItem(index);
        });
    });
});