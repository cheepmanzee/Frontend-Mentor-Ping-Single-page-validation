const $input = document.getElementById('email');
const $form = document.getElementById('form');
const $btn = document.getElementById('btn');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$form.addEventListener('submit', (e) => {
    let inputValue = $input.value;

    if (validateEmail(inputValue)) {
        $input.classList.remove('error');
    } else {
        $input.classList.add('error')
        console.log('error');
        e.preventDefault();
    }
})

