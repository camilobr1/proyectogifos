const gifTrendingContainer = document.querySelector('.gifTrendingContainer')
const api_key = '2zvfMcK0at0yhnLlzCK1lgJPWhBZ7qIr';
const endPointTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=20`
const input_buscador = document.getElementById('input_buscador')
const opciones_buscador = document.getElementById('opciones_buscador')
const contenido_buscador = document.getElementById('contenido_buscador')
const lupa = document.getElementById('lupa')
const lupa2 = document.getElementById('lupa2')
const contenedorSearchs = document.getElementById('contenedorSearchs')
const contenedorImagenes = document.getElementById('contenedorImagenes')
const vermas1 = document.getElementById('vermas1')








//               FUNCIONES           //

const getGif = async (endPoint)=>{
    const response = await(fetch(endPoint))
    const json = await response.json()
    

    return json.data
}
const showGif = trendings=>{
    
    trendings.forEach(element => {
        const divGif = document.createElement('div')
        const contenedorTarjeta = document.createElement('div')
        const contenedorBotones = document.createElement('div')
        let img = document.createElement('img')
        let title = document.createElement('h1')
        let username = document.createElement('p')
        let corazon = document.createElement('img')
        let descarga = document.createElement('img')
        let maximizar = document.createElement('img')
        divGif.classList.add('gifStyle')
        contenedorTarjeta.classList.add('tarjeta')
        contenedorBotones.classList.add('botones')


        img.setAttribute('src', element.images.original.url)
        title.textContent = element.title
        username.textContent = element.username
        corazon.setAttribute('src', "/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-fav.svg" )
        corazon.setAttribute('class', "corazon" )
        descarga.setAttribute('src', "/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-download.svg" )
        descarga.setAttribute('class', "descarga" )
        maximizar.setAttribute('src', "/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-max-normal.svg")
        maximizar.setAttribute('class', "maximizar")

        contenedorBotones.appendChild(corazon)
        contenedorBotones.appendChild(descarga)
        contenedorBotones.appendChild(maximizar)

        
        contenedorTarjeta.appendChild(contenedorBotones)
        contenedorTarjeta.appendChild(title)
        contenedorTarjeta.appendChild(username)
        
        
        divGif.appendChild(img)
        divGif.appendChild(contenedorTarjeta)
        
        gifTrendingContainer.appendChild(divGif)
        corazon.addEventListener('click',()=>{
            console.log('Agregado a favoritos ' + element.title  )
        })
        descarga.addEventListener('click',()=>{
            console.log('Descargar ' + element.title  )
        })
        maximizar.addEventListener('click',()=>{
            console.log('Maximizar ' + element.title  )
        })

    });
}
const showSearchs = searchs=>{
    searchs.forEach(element => {
        const divGif = document.createElement('div')
        const contenedorTarjeta = document.createElement('div')
        let img = document.createElement('img')
        let title = document.createElement('h1')
        let username = document.createElement('p')
        let corazon = document.createElement('img')
        let descarga = document.createElement('img')
        let maximizar = document.createElement('img')
        divGif.classList.add('gifStyle')
        contenedorTarjeta.classList.add('tarjeta')

        img.setAttribute('src', element.images.original.url)
        title.textContent = element.title
        username.textContent = element.username
        corazon.setAttribute('src', "/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-fav.svg" )
        descarga.setAttribute('src', "/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-download.svg" )
        maximizar.setAttribute('src', "/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-max-hover.svg")

        contenedorTarjeta.appendChild(title)
        contenedorTarjeta.appendChild(username)
        contenedorTarjeta.appendChild(corazon)
        contenedorTarjeta.appendChild(descarga)
        contenedorTarjeta.appendChild(maximizar)
        
        divGif.appendChild(img)
        divGif.appendChild(contenedorTarjeta)
        contenedorSearchs.appendChild(divGif)
    });
}
const getSuggestion = async (endpoint)=>{
    const response = await fetch(endpoint);
    const json = await response.json();
    const data = json.data

    return json.data
}
const showSuggestions = term =>{
    term.forEach( element =>{
        const li = document.createElement('li')
        const lupa3 = document.createElement('img')

        lupa3.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-search.svg')
        
        li.textContent= element.name ;
        li.appendChild(lupa3);

        opciones_buscador.appendChild(li)
        
    })
}
const agregarFavorito = ()=>{
    const corazon2 = document.getElementsByClassName('corazon')

    for(let i = 0; i < corazon2.length; i++){
        corazon2[i].addEventListener('click', ()=>{
        console.log('Guardar en favoritos')
    })
}
}

//               FIN FUNCIONES       //

//GIF TRENDINGS
getGif(endPointTrending)
.then( response => showGif(response))
// SUGERENCIAS                       //
input_buscador.addEventListener('keyup', ()=>{
    term = input_buscador.value
    //console.log(term)
    const endPointSuggestions = `https://api.giphy.com/v1/tags/related/${term}?api_key=${api_key}`;
    getSuggestion(endPointSuggestions)
    .then( resp => showSuggestions(resp))
    opciones_buscador.innerHTML=''
    // STYLE CONTENIDO BUSCADOR //
    if(input_buscador.value === ""){
        input_buscador.style.backgroundColor= 'white';
        
    }else{
        lupa.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/close.svg')
        lupa2.style.display= 'flex'
        contenido_buscador.style.borderBottom= '1px solid #9CAFC3'
    }
     
})
    //Limpieza del buscador//
lupa.addEventListener('click',()=>{
    input_buscador.value = ''
    opciones_buscador.innerHTML=''
    lupa2.style.display= 'none'
    contenido_buscador.style.borderBottom= '0px solid #9CAFC3'
    lupa.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-search.svg')
})
    //Click en sugerencia//
opciones_buscador.addEventListener('click', (event)=>{
    console.log(event.target.textContent)
    input_buscador.value = event.target.textContent
    opciones_buscador.innerHTML=''
    lupa2.style.display= 'none'
    contenido_buscador.style.borderBottom= '0px solid #9CAFC3'
    lupa.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-search.svg')

})

//   BUSCAR     //
input_buscador.addEventListener('keypress', (event)=>{
    if(event.which == 13 ){
        
     let string = input_buscador.value
     let limit = 12
     console.log(string)
    const endPointSearch = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${string}&limit=${limit}`
    getGif(endPointSearch)
    .then( resp => showSearchs(resp)) 
    }
    vermas1.addEventListener('click', ()=>{
        
    })
    
})
//              Favoritos //








