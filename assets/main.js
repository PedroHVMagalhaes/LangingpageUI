const form = document.querySelector("#form")
const nome = document.querySelector("#name")
const email = document.querySelector("#email")
const errorNome = document.querySelector("#erroName")
const errorEmail = document.querySelector("#erroEmail")

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
//Verifica se o nome está preenchido

    if(nome.value === ''){
        errorNome.innerHTML = "Preencha este campo";
        return;
    }

    if(email.value === '' || !emailValid(email.value)){
        errorEmail.innerHTML = "Preencha este campo";
        return;
    }

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

function emailValid(email) {

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}


