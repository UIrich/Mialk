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
    const carrosselItems = document.querySelectorAll('.carrossel-item');
    const indicadores = document.querySelectorAll('.indicador');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function updateCarrossel() {
        // Remove todas as classes active
        carrosselItems.forEach(item => item.classList.remove('active'));
        indicadores.forEach(ind => ind.classList.remove('active'));
        
        // Adiciona active no item atual
        carrosselItems[currentIndex].classList.add('active');
        indicadores[currentIndex].classList.add('active');
        
        // Atualiza cores dos controles baseado no mascote ativo
        updateControlsColor();
    }

    function updateControlsColor() {
        const activeItem = document.querySelector('.carrossel-item.active');
        const controls = document.querySelectorAll('.carrossel-controle');
        
        if (activeItem.id === 'morango-mascote') {
            controls.forEach(control => {
                control.style.backgroundColor = 'var(--rosa-forte)';
                control.style.boxShadow = '0 3px 10px rgba(209, 77, 122, 0.3)';
            });
        } else if (activeItem.id === 'cappuccino-mascote') {
            controls.forEach(control => {
                control.style.backgroundColor = 'var(--cappuccino)';
                control.style.boxShadow = '0 3px 10px rgba(156, 101, 47, 0.3)';
            });
        } else if (activeItem.id === 'baunilha-mascote') {
            controls.forEach(control => {
                control.style.backgroundColor = 'var(--baunilha)';
                control.style.boxShadow = '0 3px 10px rgba(100, 136, 172, 0.3)';
            });
        }
    }

    // Navegação por indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            currentIndex = index;
            updateCarrossel();
        });
    });

    // Botão anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carrosselItems.length) % carrosselItems.length;
        updateCarrossel();
    });

    // Botão próximo
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carrosselItems.length;
        updateCarrossel();
    });

    // Inicializa o carrossel
    updateCarrossel();
});