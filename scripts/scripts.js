const gifTrendingContainer = document.querySelector('.gifTrendingContainer')
const api_key = '2zvfMcK0at0yhnLlzCK1lgJPWhBZ7qIr';
const endPointTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=20`
const input_buscador = document.getElementById('input_buscador')
const opciones_buscador = document.getElementById('opciones_buscador')
const contenido_buscador = document.getElementById('contenido_buscador')
const lupa = document.getElementById('lupa')
const lupa2 = document.getElementById('lupa2')




//               FUNCIONES           //
const getGif = async (endPoint)=>{
    const response = await(fetch(endPoint))
    const json = await response.json()

    return json.data
}
const showGif = trendings=>{
    trendings.forEach(element => {
        const divGif = document.createElement('div')
        let img = document.createElement('img')

        divGif.classList.add('gifStyle')
        img.setAttribute('src', element.images.original.url)

        divGif.appendChild(img)
        gifTrendingContainer.appendChild(divGif)


        
    });
}
const getSuggestion = async (endpoint)=>{
    const response = await fetch(endpoint);
    const json = await response.json();
    const data = json.data
    data.forEach(element => {
        console.log(element.name)
        
    });
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

//               FIN FUNCIONES       //

//GIF TRENDINGS
getGif(endPointTrending)
.then( response => showGif(response))
// SUGERENCIAS                       //
input_buscador.addEventListener('keyup', ()=>{
    term = input_buscador.value
    console.log(term)
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


