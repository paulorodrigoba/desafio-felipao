function mostrarBoasVindas() {
  var nome = document.getElementById('name').value;
  var mensagemElement = document.getElementById('mensagem');

  if (nome.trim() !== '') {
      mensagemElement.innerHTML = 'Bem-vindo, ' + nome + '!';
  } else {
      mensagemElement.innerHTML = 'Por favor, digite seu nome.';
  }
}
