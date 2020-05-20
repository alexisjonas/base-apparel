const form = document.querySelector('.hero__form');
const formSubmit = document.querySelector('.input');
const btn = document.querySelector('.btn');

formSubmit.addEventListener('invalid', function(e) {
    e.preventDefault();
    
    const markup = `
        <p class="error-message">Please provide a valid email</p>
    `

    const img = `
        <img src="images/icon-error.svg" class="error-icon"alt="error"/>
    `

    form.insertAdjacentHTML('afterend', markup);
    btn.insertAdjacentHTML('beforebegin', img)
})
