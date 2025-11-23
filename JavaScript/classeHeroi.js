// Desafio do curso de Lógica de programação DIO
// 
// Criar uma classe genérica que represente um herói
// de uma aventura com as seguintes propriedades: nome, idade, tipo de personagem
//    guerreiro, mago, monge, ninja
// exibir mensagem: "o {tipo} atacou usando {ataque}"
// se for mago => "usou magia"
// se for guerreiro => "usou espada"
// se for monge => "usou artes marciais"
// se for ninja => "usou shuriken"

class Heroi{
  constructor(nome, idade, tipo){
    this.nome  = nome
    this.idade = idade
    this.tipo  = tipo
  }
  // método para relacionamento de herói e seu ataque
  ataque(){
    let tipoAtaque = ""
    if(this.tipo === "Guerreiro")   { tipoAtaque = "Espada" }
      else if(this.tipo === "Mago") { tipoAtaque = "Magia" }
      else if(this.tipo === "Monge"){ tipoAtaque = "Artes Marciais" }
      else if(this.tipo === "Ninja"){ tipoAtaque = "Shuriken" }
      else{ tipoAtaque = "Sem ataque" }
    return tipoAtaque
  }
  // método para exibiçãi do resultado
  exibir(){
    let atacando = myHero.ataque()
    return `Nosso herói ${this.nome} de ${this.idade} anos é um ${this.tipo} e atacou com ${atacando}!`
  }
}

// declarando as variáveis
let myHero   = ""
let executar = ""
nomes = ["Tigre", "Merlin", "Lee", "Shinobi"]
idades = [30, 60, 45, 25]
tipos = ["Guerreiro", "Mago", "Monge", "Ninja"]

// Laço para acesso aos heróis
for(let i = 0; i <= 3; i++){
  myHero   = new Heroi(nomes[i], idades[i], tipos[i])
  executar = myHero.exibir()
  console.log(executar)
}