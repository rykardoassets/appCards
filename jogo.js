let altura
let largura

let lista_cartas = Array()
lista_cartas[0] = 'imagens/2paus.png'
lista_cartas[1] =  'imagens/3paus.png'

function ajustaTamanhoPalcoJogo() {
	 altura  = window.innerHeight
	 largura = window.innerWidth

	 console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoCartas(){



var cartas = document.createElement('img')
let valor = valorCartas()
cartas.src = lista_cartas[valor]
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