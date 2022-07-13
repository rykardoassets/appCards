let altura
let largura

let lista_cartasEnderecos = Array()
lista_cartasEnderecos[0] =  'imagens/2paus.png'
lista_cartasEnderecos[1] =  'imagens/3paus.png'
lista_cartasEnderecos[2] =  'imagens/4paus.png'

let lista_cartas = Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13)
//tamanho do array
document.write(lista_cartas.length + '</br>')



let cartas_jogador  = Array()
let x = 0
while(x < 14){
let y = Math.random() * 14 //sorteando valores aleatórios em um certo intervalo 0 a 14
y = Math.floor(y)      //arrendondando o valor para baixo

	if(lista_cartas.indexOf(y) != -1){

		cartas_jogador[x] = y 
		lista_cartas[y]= -1
		x++
	}

}
console.log(cartas_jogador)

//let muda_valor =lista_cartas.indexOf(x)
document.write(x)
//pesquisa em array
//let muda_valor =lista_cartas.indexOf(x)
//lista_cartas[muda_valor]= -1
console.log(lista_cartas)



lista_cartas[9] = 'x'
console.log(lista_cartas[9])
let minhas_cartas = Array()


let cartas_oponente = Array()

function ajustaTamanhoPalcoJogo() {
	 altura  = window.innerHeight
	 largura = window.innerWidth

	 console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoCartas(){



var cartas = document.createElement('img')
let valor = valorCartas()
cartas.src = lista_cartasEnderecos[valor]
cartas.className = 'cartas'
cartas.style.left = 80 + 'px'
cartas.style.top = 80 + 'px'
cartas.style.position = 'absolute'
cartas.id="carta"
cartas.on = function(){
	//alert(this.id)
	cartas.style.top = 50 + 'px'
}

document.body.appendChild(cartas)

}

function valorCartas(){

	let valorCarta = Math.floor(Math.random() * 2)
	return valorCarta
}