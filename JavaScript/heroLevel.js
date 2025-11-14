// Desafio do curso de Lógica de programação DIO
// 
// Criar um algoritmo que armazene a experiência do herói e avalie seu nível

// Definindo as variáveis
let acumuladorXP = 0
let heroLevel = ""
let heroName = "Grande Lobo Cinza"

// O acumulador de XP vai sendo incrementado ao longo do tempo
for(i = 0; i <= 10200; i += 500){
  acumuladorXP += 500
  if(acumuladorXP <= 1000){heroLevel = "Ferro"}
  if(acumuladorXP > 1000 && acumuladorXP <= 2000){heroLevel  = "Bronze"}
  if(acumuladorXP > 2000 && acumuladorXP <= 5000){heroLevel  = "Prata"}
  if(acumuladorXP > 5000 && acumuladorXP <= 7000){heroLevel  = "Ouro"}
  if(acumuladorXP > 7000 && acumuladorXP <= 8000){heroLevel  = "Platina"}
  if(acumuladorXP > 8000 && acumuladorXP <= 9000){heroLevel  = "Ascendente"}
  if(acumuladorXP > 9000 && acumuladorXP <= 10000){heroLevel = "Imortal"}
  if(acumuladorXP > 10000){heroLevel = "Radiante"}  
  console.log("*** " + heroName + " *** batalhou e acumulou " + acumuladorXP + " pontos. Agora está no nível *** " + heroLevel + " ***.\n")

  // usando laço como temporizador
  for(j = 0; j <= 500000000; j++){}
}
