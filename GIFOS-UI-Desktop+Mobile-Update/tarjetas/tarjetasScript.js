
const divGifstTrendings = document.querySelector('.divGifstTrendings')




const divGif = document.createElement('div')
divGif.classList.add('gif')
const divCard = document.createElement('div')
divCard.setAttribute('id', 'card')
divGifstTrendings.appendChild(divGif)
divGifstTrendings.appendChild(divCard)
const divBotones = document.createElement('div')
divBotones.classList.add('botones')
divCard.appendChild(divBotones)

const corazon =document.createElement('img')
corazon.setAttribute('src', "../Recursos/assets/icon-fav-hover.svg")

const maximizar =document.createElement('img')
maximizar.setAttribute('src', "../Recursos/assets/icon-max-hover.svg")

const descargar =document.createElement('img')
descargar.setAttribute('src', "../Recursos/assets/icon-download-hover.svg")


const img = document.createElement('img')
img.setAttribute('src', "https://via.placeholder.com/300")


const title = document.createElement('h2')
title.textContent = 'HOLA'
const user = document.createElement('p')
user.textContent = 'HOLA2'
divGif.appendChild(img)
divCard.appendChild(title)
divCard.appendChild(user)
divBotones.appendChild(corazon)
divBotones.appendChild(descargar)
divBotones.appendChild(maximizar)

const divContenedorGif = createElement('div')
divContenedorGif.classList.add()
divContenedorGif.appendChild(divGif)
divContenedorGif.appendChild(divCard)




/*<div id="gifs">
<img src="https://via.placeholder.com/300" alt="">
</div>
<div id="card">
<div id="botones">
    <img src="../Recursos/assets/icon-max-hover.svg"> 
    <img src="../Recursos/assets/icon-download-hover.svg" alt="" id="descargar">    
    <img src="../Recursos/assets/icon-fav-hover.svg" alt="" id="corazon">
 </div>
<h3>User</h3>
<h2>Titulo</h2>
</div>

`
*/