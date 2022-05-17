const accesoFavoritos = document.getElementById('accesoFavoritos')
const btnVerMas = document.getElementById('vermas1')
const inicio = document.getElementsByClassName('inicio')
const logo = document.getElementById('logo')
const divFavoritos = document.getElementById('divFavoritos')
const  contenedorFavoritos = document.getElementById('contenedorFavoritos')
let arrayFavoritos = []
divFavoritos.style.display= 'none';

const guardarLocalStorage = ()=>{
    localStorage.setItem('GifFavoritos', JSON.stringify(arrayFavoritos))
    localStorage.setItem('MisGifos', JSON.stringify(arrayMisGifos))

}

const traerLocalStorage = ()=>{
    const LSfav = JSON.parse(localStorage.getItem('GifFavoritos'))
    arrayFavoritos = LSfav

}

accesoFavoritos.addEventListener('click', ()=>{
    inicio[0].style.display= 'none';
    btnVerMas.style.display= 'none';
    contenedorSearchs.style.display = 'none'
    divFavoritos.style.display= 'flex';
    divMisGifos.style.display= 'none';
    divCrearGif.style.display = 'none'
    trending_gifos.style.display = 'flex'
    
     traerLocalStorage();
    
    if(arrayFavoritos.length === 0){
        console.log('No hay favoritos')
    }else{
        contenedorFavoritos.innerHTML=''
        for(let i=0; i<arrayFavoritos.length; i++){
            let fetchFavoritos = `https://api.giphy.com/v1/gifs?ids=${arrayFavoritos[i].gif}&api_key=${api_key}&`
            getGif(fetchFavoritos)
            .then(resp =>{
            const divGif = document.createElement('div')
            const contenedorTarjeta = document.createElement('div')
            const contenedorBotones = document.createElement('div')
            let img = document.createElement('img')
            let title = document.createElement('h1')
            let username = document.createElement('p')
            let corazon2 = document.createElement('img')
            let descarga = document.createElement('img')
            let maximizar = document.createElement('img')
            divGif.classList.add('gifStyle')
            contenedorTarjeta.classList.add('tarjeta')
            contenedorBotones.classList.add('botones')


        img.setAttribute('src', resp[0].images.original.url)
        title.textContent = resp[0].title
        username.textContent = resp[0].username
        corazon2.setAttribute('src', "/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-trash-normal.svg" )
        corazon2.setAttribute('class', "corazon" )
        descarga.setAttribute('src', "/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-download.svg" )
        descarga.setAttribute('class', "descarga" )
        maximizar.setAttribute('src', "/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-max-normal.svg")
        maximizar.setAttribute('class', "maximizar")

        contenedorBotones.appendChild(corazon2)
        contenedorBotones.appendChild(descarga)
        contenedorBotones.appendChild(maximizar)

        
        contenedorTarjeta.appendChild(contenedorBotones)
        contenedorTarjeta.appendChild(title)
        contenedorTarjeta.appendChild(username)
        
        
        divGif.appendChild(img)
        divGif.appendChild(contenedorTarjeta)
        divGif.setAttribute('id', resp[0].title)
        
        contenedorFavoritos.appendChild(divGif)
        corazon2.addEventListener('click',()=>{
           
         
            arrayFavoritos.push(agregarFav)
           guardarLocalStorage()
            
        })
        corazon2.addEventListener('mouseover', ()=>{
            corazon2.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-trash-hover.svg')
        })
        corazon2.addEventListener('mouseout', ()=>{
            corazon2.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-trash-normal.svg')
        })
        descarga.addEventListener('click',()=>{
            console.log('Descargar ' + element.title  )
            downloadGif(element.images.original.url, element.title)
            
        })
        descarga.addEventListener('mouseover', ()=>{
            descarga.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-download-hover.svg')
        })
        descarga.addEventListener('mouseout', ()=>{
            descarga.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-download.svg')
        })
        maximizar.addEventListener('click',()=>{
            divGifMax.style.display = 'flex';
            console.log('Maximizar ' + element.title  )
            const divGifMaxbotones = document.createElement('div')
            const divGifph1 = document.createElement('div')
            const salirGifMax = document.createElement('img')
            const divSalirGifMax = document.createElement('div')
            const divbotonesTitulo = document.createElement('div')
            salirGifMax.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/close.svg')

            divSalirGifMax.setAttribute('id', 'salirGifMax')
            divSalirGifMax.appendChild(salirGifMax)
            img.setAttribute('id','imgMax')
            divGifMaxbotones.setAttribute('id', 'divGifMaxbotones')
            divGifph1.setAttribute('id', 'divGifph1')
            divbotonesTitulo.setAttribute('id', 'divbotonesTitulo')  
            divbotonesTitulo.appendChild(divGifph1)
            divbotonesTitulo.appendChild(divGifMaxbotones)
            
            divGifMaxbotones.appendChild(corazon)
            divGifMaxbotones.appendChild(descarga)
            divGifph1.appendChild(title)
            divGifph1.appendChild(username)
            divGifMax.appendChild(divSalirGifMax)
            divGifMax.appendChild(img)
            divGifMax.appendChild(divbotonesTitulo)
            
            document.body.style.border='0px'


            salirGifMax.addEventListener('click', ()=>{
                contenedorBotones.appendChild(corazon)
                contenedorBotones.appendChild(descarga)
                contenedorBotones.appendChild(maximizar)

            
                contenedorTarjeta.appendChild(contenedorBotones)
                contenedorTarjeta.appendChild(title)
                contenedorTarjeta.appendChild(username)
                
                
                divGif.appendChild(img)
                divGif.appendChild(contenedorTarjeta)
                divGif.setAttribute('id', element.title)
                divGifMax.style.display='none'
                divGifMax.innerHTML=''
        
            })     

        })
        maximizar.addEventListener('mouseover', ()=>{
            maximizar.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-max-hover.svg')
        })
        maximizar.addEventListener('mouseout', ()=>{
            maximizar.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-max-normal.svg')
        })
                
        
            })
         }
        
        
    }
    
})
logo.addEventListener('click', ()=>{
    inicio[0].style.display= 'flex';
    divFavoritos.style.display= 'none';
    btnVerMas.style.display= 'block';
    trending_gifos.style.display = 'flex'
    divMisGifos.style.display= 'none';
    divCrearGif.style.display = 'none'
    
})
accesoMisGifos.addEventListener('click', ()=>{
    inicio[0].style.display= 'none';
    btnVerMas.style.display= 'none';
    contenedorSearchs.style.display = 'none'
    divFavoritos.style.display= 'none';
    divMisGifos.style.display= 'flex';
    divCrearGif.style.display = 'none'
    trending_gifos.style.display = 'flex'
})
btn_creargifo.addEventListener('click', ()=>{
    inicio[0].style.display= 'none';
    btnVerMas.style.display= 'none';
    contenedorSearchs.style.display = 'none'
    divFavoritos.style.display= 'none';
    divMisGifos.style.display= 'none';
    divCrearGif.style.display = 'flex';
    trending_gifos.style.display = 'none'
})

contenedorFavoritos.style.display = 'flex';
contenedorFavoritos.style.width = '90%';
contenedorFavoritos.style.flexWrap = 'wrap';





