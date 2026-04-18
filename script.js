document.addEventListener('DOMContentLoaded', () => {
    
    // --- STICKY NAVBAR ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- MOBILE MENU TOGGLE ---
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    let isMenuOpen = false;
    
    mobileToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if(isMenuOpen) {
            mobileNav.classList.add('active');
            mobileToggle.innerHTML = '<i class="ph ph-x"></i>';
        } else {
            mobileNav.classList.remove('active');
            mobileToggle.innerHTML = '<i class="ph ph-list"></i>';
        }
    });

    // close mobile menu on link click
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileNav.classList.remove('active');
            mobileToggle.innerHTML = '<i class="ph ph-list"></i>';
        });
    });

    // --- FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-body').style.maxHeight = null;
            });
            
            // Open clicked item if it wasn't already open
            if (!isActive) {
                item.classList.add('active');
                const body = item.querySelector('.faq-body');
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
    
    // --- SMOOTH SCROLLING EXTRA ---
    // (CSS scroll-behavior: smooth handles most cases, 
    // but JS can add a slight offset for the fixed header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
