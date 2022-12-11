const gifTrendingContainer = document.querySelector('.gifTrendingContainer')
const api_key = '2zvfMcK0at0yhnLlzCK1lgJPWhBZ7qIr';
const endPointTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=20`
const input_buscador = document.getElementById('input_buscador')
const opciones_buscador = document.getElementById('opciones_buscador')
const contenido_buscador = document.getElementById('contenido_buscador')
const lupa = document.getElementById('lupa')
const lupa2 = document.getElementById('lupa2')
const contenedorSearchs = document.getElementById('contenedorSearchs')
//const contenedorFavoritos = document.getElementById('contenedorFavoritos')
const contenedorImagenes = document.getElementById('contenedorImagenes')
const vermas1 = document.getElementById('vermas1')
const accesoMisGifos = document.getElementById('accesoMisGifos')
const divMisGifos = document.getElementById('divMisGifos')
const divGifMax = document.getElementById('gifMax')
const divCrearGif = document.getElementById('divCrearGif')
const btn_creargifo = document.getElementById('btn_creargifo')
const trending_gifos = document.getElementById('trending_gifos')
const zonaGrabacion = document.getElementById('zonaGrabacion')
const comenzar = document.getElementById('comenzar')
const tituloCrearGif = document.getElementById('tituloCrearGif')
const pCrearGif = document.getElementById('pCrearGif')
const centro = document.getElementById('centro')
const grabar = document.getElementById('grabar')
const btnstop = document.getElementById('stop')
let recorder;
const subir = document.getElementById('subir')
let form;
const paso1 = document.getElementById('paso1')
const paso2 = document.getElementById('paso2')
const paso3 = document.getElementById('paso3')
const subiendoGif = document.getElementById('subiendoGif')
const cargando = document.getElementById('cargando')
const pcargando = document.getElementById('pcargando')
const segundero = document.getElementById('segundero')
const repetirCaptura = document.getElementById('repetirCaptura')
const contenedorMisGifos = document.getElementById('contenedorMisGifos')
const buscadorHeader = document.getElementById('buscadorHeader')
const style = document.getElementById('style')
const activar_modonocturno = document.getElementById('activar_modonocturno')
const activar_mododiurno = document.getElementById('activar_mododiurno')
const lupanoc1 = document.getElementById('lupanoc1')



//               FUNCIONES           //

const getGif = async (endPoint)=>{
    const response = await(fetch(endPoint))
    const json = await response.json()
    

    return json.data
}
const showGif = (trendings, contenedor,)=>{
    
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
        divGif.setAttribute('id', element.title)
        
        contenedor.appendChild(divGif)
        corazon.addEventListener('click',()=>{
          
            const agregarFav =  {
                nombre: username.textContent, 
                titulo: title.textContent,
                gif: element.id,
            }
         
            arrayFavoritos.push(agregarFav)
           guardarLocalStorage()
           
            
        })
        corazon.addEventListener('mouseover', ()=>{
            corazon.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-fav-hover.svg')
        })
        corazon.addEventListener('mouseout', ()=>{
            corazon.setAttribute('src', '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-fav.svg')
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
const downloadGif = async (url, title) => {
    let blob = await fetch(url).then((img) => img.blob());
    invokeSaveAsDialog(blob, title + '.gif');
};
//               FIN FUNCIONES       //
//GIF TRENDINGS
getGif(endPointTrending)
.then( response => showGif(response, gifTrendingContainer ))
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
    .then( resp => showGif(resp, contenedorImagenes)) 
    }
    vermas1.addEventListener('click', ()=>{
        
    })
    
})

// CREAR GIF
function obtenerVideo () { 
    navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
       height: { max: 360 }
    }
 })
.then( stream =>{
    centro.innerHTML= '';
    const video = document.createElement('video')
    video.setAttribute('id', 'video')
    video.classList.add('recordingVideo')
    centro.appendChild(video)
    video.srcObject = stream;
    video.play()
     recorder = RecordRTC(stream, {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function() {
        console.log('started')
        },
    });
    grabar.style.display= 'flex'
    paso1.style.backgroundColor = 'white'
    paso1.style.color='#572EE5'
    paso2.style.backgroundColor = '#572EE5'
    paso2.style.color='white'

   
})

}
comenzar.addEventListener('click',()=>{
    tituloCrearGif.innerHTML = `¿Nos das acceso <br> a tu cámara?`
    pCrearGif.innerHTML = `El acceso a tu camara será válido sólo <br> por el tiempo en el que estés creando el GIFO.`
    comenzar.style.display='none';
    paso1.style.backgroundColor = '#572EE5'
    paso1.style.color='white'
    obtenerVideo()
    
})
grabar.addEventListener('click',()=>{
    console.log('comenzo la grabacion')
    grabar.style.display='none'
    btnstop.style.display='flex'
   recorder.startRecording()
   timer = setInterval(timerActivo, 1000);
   segundero.style.display='flex'
})
btnstop.addEventListener('click', ()=>{
        recorder.stopRecording(function() {
            let blob = recorder.getBlob();
            form = new FormData();
            form.append('file', blob, 'myGif.gif');
            console.log(form.get('file'))
            btnstop.style.display= 'none'
        subir.style.display='flex'
        
        const grabacion = document.createElement('img')
        grabacion.src= URL.createObjectURL(blob);
        centro.appendChild(grabacion)
        video.style.display= 'none'
        });
    
        clearInterval(timer)
        segundero.style.display='none'
        repetirCaptura.style.display='flex'
        
})

const endPointUpLoad = async()=>{
    subiendoGif.style.display='flex'
    await fetch(`https://upload.giphy.com/v1/gifs?api_key=${api_key}`, {
        method: 'POST',
        body: form,
     })   
    .then((response) => response.json())
    .then((myGif) => {
            let myGifoId = myGif.data.id
            
            console.log(myGifoId); 
            cargando.src='/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/check.svg'
            pcargando.textContent='GIFO subido con éxito'

            arrayMisGifos.push(myGifoId)
            guardarLocalStorage()
           
            
    })
    .catch((err) => {
        console.log(err);
    });
   

}
subir.addEventListener('click', ()=>{
    endPointUpLoad()
    subir.style.display='none';
    paso2.style.backgroundColor = 'white'
    paso2.style.color='#572EE5'
    paso3.style.backgroundColor = '#572EE5'
    paso3.style.color='white'
    
    
} )

//       TIMER      //
let timer;
let hours = '00';
let minutes = '00';
let seconds = '00';

function timerActivo() {
	seconds++;

	if (seconds < 10) seconds = `0` + seconds;

	if (seconds > 59) {
		seconds = `00`;
		minutes ++;

		if (minutes < 10) minutes = `0` + minutes;
	}

	if (minutes > 59) {
		minutes = `00`;
		hours++;

		if (hours < 10) hours = `0` + hours;
	}

	segundero.innerHTML = `${hours}:${minutes}:${seconds}`;
}

const repetir = () => {
	recorder.clearRecordedData();
    grabar.style.display='flex'
    subir.style.display='none';
    repetirCaptura.style.display='none'
    
	obtenerVideo()
};
repetirCaptura.addEventListener('click',()=>{
    segundero.innerHTML='00:00:00'
    repetir()
} )

//      MIS GIFOS       //
let arrayMisGifos= []
const getMisGifs = async (id)=>{
    const response = await(fetch(`https://api.giphy.com/v1/gifs?ids=${id}&api_key=${api_key}`))
    const json = await response.json()
    

    return json.data
}
accesoMisGifos.addEventListener('click',()=>{
    const LSMisGifos = JSON.parse(localStorage.getItem('MisGifos'))
    traerLocalStorage()
    arrayMisGifos = LSMisGifos
    contenedorMisGifos.innerHTML=''
    
    arrayMisGifos.forEach(element => {
        console.log(element)
        getMisGifs(element)
        .then(resp =>{ showGif(resp, contenedorMisGifos)})
        .then( resp => {
            let corazones = contenedorMisGifos.getElementsByClassName('corazon')
            for(let i = 0; i < corazones.length; i++){
                corazones[i].src= "/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-trash-normal.svg"
                corazones[i].addEventListener('mouseover', ()=>{
                    corazones[i].src= "/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-trash-hover.svg"
                })
                corazones[i].addEventListener('mouseout', ()=>{
                    corazones[i].src= "/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-trash-normal.svg"
                })
            }

        }
            )
       
        
    });
    

    
})



// STYLES//
contenido_buscador.style.margin= '3%'
contenedorMisGifos.style.display = 'flex';
contenedorMisGifos.style.width = '90%';
contenedorMisGifos.style.flexWrap = 'wrap';
contenedorSearchs.style.display='none'


// BARRA DE BUSQUEDA EN HEADER
let ubicacionScroll = window.pageYOffset;

window.onscroll = ()=>{
    let ubicacionActual2 = window.pageYOffset;
    if(ubicacionActual2 > 300){
        buscadorHeader.style.display ='flex';
        contenido_buscador.style.display= 'none';
        opciones_buscador.style.display= 'none';

    }else{
        buscadorHeader.style.display ='none'; 
        contenido_buscador.style.display= 'flex';
        opciones_buscador.style.display= 'flex';
    }

}
// MODO NOCTURNO 
activar_mododiurno.style.display= 'none'
activar_modonocturno.addEventListener('click', ()=>{
    style.href='./modo_nocturno/style_nocturno/stylenoc.css'
    activar_mododiurno.style.display= 'block'
    activar_modonocturno.style.display= 'none'
    logo.src= '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/Logo-modo-noc.svg'
    btn_creargifo.src= '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/CTA-crar-gifo-modo-noc.svg'
    lupanoc1.innerHTML='<img class="lupa" src="/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-search-mod-noc.svg" alt="icon-search">'
    lupa2.innerHTML='<img class="lupa" src="/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-search-mod-noc.svg" alt="icon-search">'
    lupa.src='/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-search-mod-noc.svg'
})

// MODO DIURNO
activar_modonocturno.style.display= 'block'
activar_mododiurno.addEventListener('click', ()=>{
    style.href='./styles/style.css'
    activar_mododiurno.style.display= 'none'
    activar_modonocturno.style.display= 'block'
    logo.src= '/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/logo-desktop.svg'
    btn_creargifo.src= './GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/button-crear-gifo.svg'
    lupanoc1.innerHTML='<img class="lupa" src="/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-search.svg" alt="icon-search">'
    lupa2.innerHTML='<img class="lupa" src="/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-search.svg" alt="icon-search">'
    lupa.src='/GIFOS-UI-Desktop+Mobile-Update/Recursos/assets/icon-search.svg'
})







