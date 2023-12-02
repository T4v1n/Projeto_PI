
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const campos = document.querySelectorAll('.required');

    function validarCampos() {
        if ([...campos].some(campo => campo.value.trim() === "")) {
            alert("Por favor, preencha todos os campos obrigatórios.");
        } else {
            const dados = {
                nome: document.querySelector('[name="nome"]').value,
                email: document.querySelector('[name="replyto"]').value,
                telefone: document.querySelector('[name="telefone"]').value,
                comentarios: document.querySelector('textarea').value
            };

            alert(`Pedido registrado com sucesso:\nNome: ${dados.nome}\nE-mail: ${dados.email}\nTelefone: ${dados.telefone}\nPedido: ${dados.comentarios}`);
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validarCampos();
    });
});
