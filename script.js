const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

document.addEventListener('mousemove', function(e) {
    const trail = document.querySelector('.mouse-trail');
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = `${e.pageX}px`;
    dot.style.top = `${e.pageY}px`;
    trail.appendChild(dot);
    setTimeout(() => {
        dot.remove();
    }, 1000);
});
