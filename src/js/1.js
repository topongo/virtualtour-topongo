var ingressoHS = [
    {
        "pitch": -5,
        "yaw": 1.5,
        "type": "scene",
        "text": "Verso il logo ",
        "sceneId": "atrio1",
        "targetYaw": 100,
        "targetPitch": 2
    },
    {
        "pitch": 1,
        "yaw": -83,
        "type": "info",
        "cssClass": "hotspot",         //classe css personalizzata
        "createTooltipFunc": hotspot,  //funzione di rendering
        "createTooltipArgs": "bacheca" //parametri 
     },
    {
        "pitch": -3.0,
        "yaw": 18,
        "type": "info",
        "cssClass": "hotspot",         //classe css personalizzata
        "createTooltipFunc": hotspot,  //funzione di rendering
        "createTooltipArgs": "bacheca" //parametri 
     },
    {
        "pitch": -2.76,
        "yaw": -29.87,
        "type": "info",
        "cssClass": "hotspot",         //classe css personalizzata
        "createTooltipFunc": hotspot,  //funzione di rendering
        "createTooltipArgs": "bacheca" //parametri 
     }


     
]

var esterno1HS = [
    {
        "pitch": -5,
        "yaw": 1.5,
        "type": "scene",
        "text": "Verso il cancello ",
        "sceneId": "esterno4",
        "targetYaw": 100,
        "targetPitch": 2
    }
 ]

var esterno4HS = [
    {
        "pitch": 2,
        "yaw": 100,
        "type": "scene",
        "text": "Entrimo a scuola",
        "sceneId": "ingresso",
        "targetYaw": -5,
        "targetPitch": 1.5
    }
 ]

var atrio1HS = [
    {
        "pitch": 1.6,
        "yaw": 80,
        "type": "scene",
        "text": "Aula Magna",
        "sceneId": "aulamagna",
        "targetYaw": 30,
        "targetPitch": -1.5
    }
 ]
 var torriani = {   
    "ingresso" : { 
         "title": "Ingresso",
         "hfov": 110,
         "pitch": 10,
         "yaw": 40,
         "type": "equirectangular",
         "panorama": "./img/ingresso_1.JPG",
         "hotSpots": ingressoHS
    },
    "esterno4" : { 
         "title": "Arrivati al cancello",
         "hfov": 110,
         "pitch": -5,
         "yaw": 1.5,
         "type": "equirectangular",
         "panorama": "./img/esterno_4.JPG",
         "hotSpots": esterno4HS
    }
}


function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);

    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}