// Age Gate Functionality
document.addEventListener('DOMContentLoaded', function() {
    const ageGate = document.getElementById('ageGate');
    const ageVerified = localStorage.getItem('ageVerified');
    
    if (ageVerified === 'true') {
        if (ageGate) {
            ageGate.classList.add('hidden');
        }
    }
});

function acceptAge() {
    localStorage.setItem('ageVerified', 'true');
    const ageGate = document.getElementById('ageGate');
    ageGate.style.animation = 'fadeOut 0.5s ease';
    setTimeout(() => {
        ageGate.classList.add('hidden');
    }, 500);
}

function rejectAge() {
    alert('You must be 21 or older to access this site.');
    window.location.href = 'https://www.responsibility.org/';
}

// Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #d4a574;
        color: #0a0a0a;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animation styles for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add to cart button handlers
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-add-cart')) {
        const productCard = e.target.closest('.product-card');
        if (productCard) {
            const productName = productCard.querySelector('.product-name').textContent;
            const productPriceText = productCard.querySelector('.product-price').textContent;
            const productPrice = parseFloat(productPriceText.replace('$', '').split(' ')[0]);
            
            const product = {
                id: Date.now(),
                name: productName,
                price: productPrice
            };
            
            addToCart(product);
        }
    }
});

// Initialize cart count on page load
updateCartCount();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .category-card, .step-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
