// Desafio do curso de Lógica de programação DIO
// 
// Criar um algoritmo que receba a quantidade de vitorias e derrotas de um jogador
//  e retorne seu Rank

// Definindo as variáveis
let i = vitorias = derrotas = resultado = resultadoCombate = combate = 0

function saldo(vitorias, derrotas){
  let saldoBatalhas = vitorias - derrotas
  return saldoBatalhas
}

function rank(resultado){
  pontos = resultado * 10
  if (pontos <= 10){ ranking = "Ferro"}
  if (pontos > 10 && pontos <= 20){ ranking = "Bronze"}
  if (pontos > 20 && pontos <= 50){ ranking = "Prata"}
  if (pontos > 50 && pontos <= 80){ ranking = "Ouro"}
  if (pontos > 80 && pontos <= 90){ ranking = "Diamante"}
  if (pontos > 90 && pontos <= 100){ ranking = "Lendário"}
  if (pontos > 100){ ranking = "Imortal"}
  return ranking
}

// gerador de combates
for (i = 1; i <= 100; i++){

  combate = Math.random() * 10

  if (combate > 5){ vitorias += 1 }
  if (combate < 5) { derrotas += 1 }
}
resultado += saldo(vitorias, derrotas)
nivel = rank(resultado)
console.log("\nO Herói tem saldo de << " + resultado + " >> vitórias e está no nível " + nivel)
