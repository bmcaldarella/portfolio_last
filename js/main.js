const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('main');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    
    if (navigation.classList.contains('open')) {
        main.style.filter = 'blur(5px)';
    } else {
        main.style.filter = 'none';
    }
});

window.addEventListener('scroll', function() {
    // Get the position of the container-2 relative to the viewport
    const container2 = document.querySelector('.container-2');
    const container2Position = container2.getBoundingClientRect().top;

    // Check if container-2 is in the viewport
    if (container2Position < window.innerHeight) {
        container2.classList.add('active'); // Agrega la clase active cuando container-2 está en el viewport
    } else {
        container2.classList.remove('active'); // Quita la clase active cuando container-2 no está en el viewport
    }
});