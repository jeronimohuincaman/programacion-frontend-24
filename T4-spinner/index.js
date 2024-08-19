window.addEventListener('load', function () {
    const boton = document.getElementById('btn-mostrar-spinner');
    const spinner = document.getElementById('spinner');

    function mostrar() {
        
        // Verificar si tiene una clase
        if (spinner.classList.contains('show')) {
            spinner.style.display = 'none';
            spinner.classList.remove('show');
            boton.textContent = 'Ocultar Spinner'
            console.log('El elemento tiene la clase "show".');
        } else {
            spinner.style.display = 'block';
            spinner.classList.add('show');
            boton.textContent = 'Mostrar Spinner'
            console.log('El elemento no tiene la clase "show".');
        }
    }


    boton.addEventListener('click', mostrar);
})
