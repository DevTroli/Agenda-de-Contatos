const form = document.querySelector('#form-clientes');

let linhas = '';

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const inputNomeCliente = document.querySelector('#nome-cliente');
  const inputTelefoneCliente = document.querySelector('#telefone-cliente');

  let novaLinha = '<tr>';
  novaLinha += `<td>${inputNomeCliente.value}</td>`;
  novaLinha += `<td>${inputTelefoneCliente.value}</td>`;
  novaLinha += '</tr>';

  linhas += novaLinha; 

  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas; 

  inputNomeCliente.value = '';
  inputTelefoneCliente.value = '';
});
