let mensagem = document.querySelector('.mensagem');

let botao = document.querySelector('.button');
botao.addEventListener('click',function(evento){
    evento.preventDefault();
    let email = document.querySelector('#newsInputEmail')
    mensagem.textContent = 'O e-mail ' + email.value + ' foi cadastrado com sucesso!';
})