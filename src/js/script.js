// script.js

// Controle do Carrossel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
}

// Auto-avanço do carrossel
setInterval(() => {
    plusSlides(1);
}, 5000);

// Modal de Detalhes
function abrirModal(modelo) {
    // ... todo o código da função abrirModal
}

function fecharModal() {
    // ... todo o código da função fecharModal
}

function obterDadosCarro(modelo) {
    // ... todo o código da função obterDadosCarro
}

// Quiz
document.addEventListener('DOMContentLoaded', function() {
    // ... todo o código relacionado ao quiz
});

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        fecharModal();
    }
}

// Suavizar rolagem para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste para o header fixo
                behavior: 'smooth'
            });
            
            // Atualizar URL sem recarregar a página
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
        }
    });
});

// Fechar menu mobile ao clicar em um link (se aplicável)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.nav');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});