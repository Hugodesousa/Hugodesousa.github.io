document.addEventListener('DOMContentLoaded', function() {
    // Função para reorganizar a estrutura de cada slider
    function reorganizeSlider() {
        // Selecionar todos os sliders
        const sliders = document.querySelectorAll('.portfolio-slider');
        
        sliders.forEach(slider => {
        // Encontrar a div pai que contém todo o bloco de slider
        const portfolioSection = slider.closest('.portfolio-section');
        
        if (!portfolioSection) return;
        
        // Encontrar o elemento de paginação dentro deste slider específico
        const paginationElement = slider.querySelector('.swiper-pagination');
        
        // Encontrar o botão "next" correspondente para este slider
        const nextButton = portfolioSection.querySelector('.swiper-button-next');
        
        // Só prosseguir se ambos os elementos existirem
        if (paginationElement && nextButton) {
            // Mover o elemento de paginação para fora do slider e colocá-lo diretamente no portfolioSection
            // antes do botão "next"
            portfolioSection.insertBefore(paginationElement, nextButton);
        }
        });
    }

    // Executar a reorganização após um breve atraso para garantir que o Swiper esteja inicializado
    setTimeout(reorganizeSlider, 300);
    });

    // Alternativa: executar quando a página estiver totalmente carregada incluindo todos os recursos
    window.addEventListener('load', function() {
    // Aguardar um tempo para garantir que o Swiper tenha terminado de inicializar
    setTimeout(function() {
        // Selecionar todos os sliders
        const sliders = document.querySelectorAll('.portfolio-slider');
        
        sliders.forEach(slider => {
        // Encontrar a div pai que contém todo o bloco de slider
        const portfolioSection = slider.closest('.portfolio-section');
        
        if (!portfolioSection) return;
        
        // Encontrar o elemento de paginação dentro deste slider específico
        const paginationElement = slider.querySelector('.swiper-pagination');
        
        // Encontrar o botão "next" correspondente para este slider
        const nextButton = portfolioSection.querySelector('.swiper-button-next');
        
        // Só prosseguir se ambos os elementos existirem
        if (paginationElement && nextButton) {
            // Mover o elemento de paginação para fora do slider e colocá-lo diretamente no portfolioSection
            // antes do botão "next"
            portfolioSection.insertBefore(paginationElement, nextButton);
        }
        });
    }, 500); // Atraso suficiente para o Swiper inicializar
});

document.addEventListener('DOMContentLoaded', () => {
    // Elementos
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const navLinks = document.querySelectorAll('.nav-tabs a');
    const sections = document.querySelectorAll('.section');
    const themeIcon = themeToggle.querySelector('i');

    // Verificar tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('dark-theme', savedTheme === 'dark');
        updateThemeIcon(savedTheme === 'dark');
    }

    // Alternar tema
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    });

    // Atualizar ícone do tema
    function updateThemeIcon(isDark) {
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Navegação por abas
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            // Remover classes active
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Adicionar classes active
            link.classList.add('active');
            document.querySelector(targetId).classList.add('active');
        });
    });

    // Configurações comuns do Swiper
    const swiperConfig = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
        },
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
    };

    // Inicializar carrossel Frontend
    const frontendSlider = new Swiper('.frontend-slider', {
        ...swiperConfig,
        navigation: {
            nextEl: '.frontend-next',
            prevEl: '.frontend-prev'
        },
        pagination: {
            el: '.frontend-slider .swiper-pagination',
            clickable: true,
        }
    });

    // Inicializar carrossel Backend
    const backendSlider = new Swiper('.backend-slider', {
        ...swiperConfig,
        navigation: {
            nextEl: '.backend-next',
            prevEl: '.backend-prev'
        },
        pagination: {
            el: '.backend-slider .swiper-pagination',
            clickable: true,
        }
    });

    // Animação das barras de habilidades
    const skillLevels = document.querySelectorAll('.skill-level');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('style').split(':')[1];
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillLevels.forEach(level => {
        level.style.width = '0';
        skillObserver.observe(level);
    });

    // Formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aqui você pode adicionar a lógica para enviar o formulário
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        });
    }
}); 