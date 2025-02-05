document.getElementById('formContato').addEventListener('submit', function(event){
    event.preventDefault(); //impedir envio do formulário

    //Obter valores dos campos de formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    //Criar nova linha na tabela
    var novaLinha = document.createElement('tr');

    //criar novas células de nome e telefone
    var celulaNome = document.createElement('td');
    celulaNome.textContent = nome;

    var celulaTelefone = document.createElement('td');
    celulaTelefone.textContent = telefone;

    // Adc as celulas a nova linha
    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaTelefone);

    // Adc nova linha a tabela
    document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0].appendChild(novaLinha);

    // Limpa os campos do formulario
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
});