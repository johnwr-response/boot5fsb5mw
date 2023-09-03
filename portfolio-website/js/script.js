function runTypingEffect() {
    const text = 'I am Brad Traversy.';
    const typingElement = document.getElementById('typing-text');
    const typingdelay = 100;

    typeText(text, typingElement, typingdelay); 
}

function typeText(text, element, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.textContent += text.charAt(i);
        }, delay * i)
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
