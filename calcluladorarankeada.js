// Função que calcula o nível com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
  // Calcula o saldo de Rankeadas
  var saldoVitorias = vitorias - derrotas;

  // Utiliza uma estrutura de decisão para determinar o nível com base no saldo de vitórias
  var nivel;

  if (vitorias < 10) {
      nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
  } else {
      nivel = "Imortal";
  }

  // Retorna o resultado em uma string formatada
  return "O Herói tem um saldo de " + saldoVitorias + " e está no nível de " + nivel;
}

// Exemplo de uso da função
var resultado = calcularNivel(60, 20);
console.log(resultado);
