const divPrueba = document.getElementById('divPrueba')
const form = document.getElementById('form')
const inputForm = document.getElementById('inputForm')
const api_key = '2zvfMcK0at0yhnLlzCK1lgJPWhBZ7qIr';


form.addEventListener('submit', (e)=>{
    e.preventDefault();
   

})

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
        const h1 = document.createElement('h1')

        h1.textContent= element.name;

        divPrueba.appendChild(h1)
    })
}
inputForm.addEventListener('keyup', ()=>{
    term = inputForm.value
    console.log(term)
    const endPointSuggestions = `https://api.giphy.com/v1/tags/related/${term}?api_key=${api_key}&limit=4`;
    getSuggestion(endPointSuggestions)
    .then( resp => showSuggestions(resp))
    divPrueba.innerHTML='' 
})

