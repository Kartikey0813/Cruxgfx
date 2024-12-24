document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        
        // Toggle display and animate
        answer.style.display = isVisible ? 'none' : 'block';
        answer.style.maxHeight = isVisible ? '0' : answer.scrollHeight + 'px';
        answer.style.opacity = isVisible ? '0' : '1';
    });
});