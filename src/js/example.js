//NOME DEL FILE:
//  rinominare il file in base alla sezione che si sta modificando.



//HOTSPOT:
//  creare gli hotspot normalmente utilizzando, all'interno della definizione delle scene, la sintassi standard.

var exampleHS = [
    {
        
    }
]

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

var example = {   //sostituire "scenes" con il nome del file.
    "example_scene":{
        "title": "example_title",
        "hfov": 110,
        "pitch": -3,
        "yaw": 117,
        "type": "equirectangular",
        "panorama": "./img/example.png",
        "hotSpots": exampleHS
    }
};