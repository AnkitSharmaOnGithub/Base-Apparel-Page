let form = document.querySelector('.form');
let email = document.querySelector('.input_email').value;
let proceed = document.querySelector('.proceed');
let status = document.querySelector('.status');

form.addEventListener('submit',e => {
    e.preventDefault();
    if(validate_mail(email)){
        proceed.classList.remove('error');
        proceed.classList.add('success');
        setMessage('Thank you! Check your email to confirm your email subscription.');
    }
    else{
        proceed.classList.remove('success');
        proceed.classList.add('error');
        setMessage('Please enter valid email.');
    }

})

function validate_mail(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test()
}

function setMessage(value){
    status.innerText = value;
}