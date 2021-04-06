
const DIV = document.querySelectorAll('div');
DIV.forEach(d => {
    if (d.textContent.includes('warning')) {
        d.classList.add('warning');
    }
    if (d.textContent.includes('success')) {
        d.classList.add('success');
    }
    if (d.textContent.includes('error')) {
        d.classList.add('error');
    }
});