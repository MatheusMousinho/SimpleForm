function ocultarErro(){

    document.getElementsByTagName('h1')[0].style.display = "none";
}

function validar(){  

    let nome = document.getElementById('nome')
    let email = document.getElementById('email');
    let cargo = document.getElementById('cargo')
    let mensagem = document.getElementById('mensagem');
    let exibirErro = document.getElementsByTagName('h1')[0];

    if(nome.value == ''){
        exibirErro.innerHTML = 'O campo NOME campo não pode estar vazio';
        exibirErro.style.display = 'block';
        nome.focus;
        return false;
    }else if(nome.value.length < 3){
        exibirErro.innerHTML = 'O campo NOME deve conter no mínimo 3 letras';
        exibirErro.style.display = 'block';
        nome.focus;
        return false;
    }else if(email.value == ''){
        exibirErro.innerHTML = 'O campo EMAIL não pode estar vazio';
        exibirErro.style.display = 'block';
        email.focus;
        return false;

    }else if(email.value.indexOf('@') == -1){
        exibirErro.innerHTML = 'O campo EMAIL deve conter @';
        exibirErro.style.display = 'block';
        email.focus;
        return false;

    }else if(email.value.indexOf('.') == -1){
        exibirErro.innerHTML = 'O campo EMAIL deve conter .';
        exibirErro.style.display = 'block';
        email.focus;
        return false;

    }else if(cargo.value == "Cargo"){
        exibirErro.innerHTML = 'Informe o CARGO';
        exibirErro.style.display = 'block';
        cargo.focus;
        return false;

    }else if(mensagem.value == ''){
        exibirErro.innerHTML = 'O campo MENSAGEM não pode estar vazio';
        exibirErro.style.display = 'block';
        mensagem.focus;
        return false;

    }else if(mensagem.value.length < 10){
        exibirErro.innerHTML = 'O campo MENSAGEM deve conter no mínimo 10 caracteres';
        exibirErro.style.display = 'block';
        mensagem.focus;
        return false;
    }
}