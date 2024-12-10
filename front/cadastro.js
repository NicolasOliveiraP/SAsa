const usuarios = []

/*  armazena os valores digitados pelo usuário nos inputs; */
function cad(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let cidade = document.getElementById("cidade").value
    let senha = document.getElementById("senha").value
    
/* cria um objeto 'usuario' para ser adicionado ao array usuarios ('s') */
    const usuario = { 
        nome, email, telefone, cidade, senha};
        usuarios.push(usuario);

        document.getElementById('formCad').reset();


    /* os consoles.log são só para fins de testes */
    console.log(usuarios);
    console.log(usuarios.length)

}