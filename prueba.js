const divPrueba = document.getElementById('divPrueba')
const form = document.getElementById('form')
const inputForm = document.getElementById('inputForm')
const api_key = '2zvfMcK0at0yhnLlzCK1lgJPWhBZ7qIr';


const getGif = async (endPoint)=>{
    const response = await(fetch(endPoint))
    const json = await response.json()

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

