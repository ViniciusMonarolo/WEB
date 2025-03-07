document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); //impede o regarregamento da pagina


// captura dops valores dos inputs
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    const senha = document.getElementById("senha").value;


    console.log('Nome: ', nome);
    console.log('Email: ', email);
    console.log('Mensagem: ', mensagem);
    console.log('Senha', senha);

});