let form = document.querySelector('.form');
let email = document.querySelector('.input_email').value;
let proceed = document.querySelector('.proceed');
let status = document.querySelector('.status');

form.addEventListener('submit',e => {
    e.preventDefault();
    if(validate_mail(email)){
        
    }
    else{

    }

})

validate_mail(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test()
}