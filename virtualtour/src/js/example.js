//NOME DEL FILE:
//  rinominare il file in base alla sezione che si sta creando.



//HOTSPOT:
//  creare gli hotspot normalmente utilizzando, all'interno della definizione delle scene, la sintassi standard. Oppure usando il generatore di hotspot (di Davide Bignamini) fornito insieme a questo esempio.


//SCENES:
//  inserire qui le scene secondo la sintassi:
//
//  var scenes = {
//      [id_scena_1]]:{
//          "yaw":...,
//          "pitch":...,
//          ...
//          ...
//          ...
//      },
//      [id_scena_2]:{
//        "yaw":...,
//      "pitch":...,
//      ...
//      },
//      ...
//  }


var example_sceneHS = [
    {
        "pitch":9,
        "yaw":-4,
        "type":"info",
        "text":"Colosseo"
    }
]

var example = {   //sostituire "example" con l'id della scena e aggiungere quante scene si desiderano, ricordando di aggiungerle nell'array in main.js chiamato "scenes_ext"
    "example_scene":{
        "title": "example_title",
        "hfov": 110,
        "pitch": -3,
        "yaw": 117,
        "type": "equirectangular",
        "panorama": "./img/example.png",
        "hotSpots": example_sceneHS
    }
};


//Da qui in poi aggiungere le funzioni che si vogliono mantenere funzionanti nel sito completo (es. creazione di hotspot personalizzati)
