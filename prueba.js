const divVideo = document.getElementById('video')
const iniciar = document.getElementById('iniciar')
const detener = document.getElementById('detener')

function obtenerVideo () { 
    navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
       height: { max: 480 }
    }
 })
.then( stream =>{
    video.srcObject = stream;
   video.play()

})
}
obtenerVideo()