//DEFAULT:
//  inserire qui di seguito le impostazioni di pannellum da utilizzare durante i test

var pannellum_settings = {
    "firstScene": "example_scene",        //  <<--- prima immagine
    "autoLoad": true,
    "northOffset": 0,
    "sceneFadeDuration": 1000
}


//INSERIMENTO SCENE:
//  inserire nell'array sottostante la/e variabile/i contente/i le scene, definite nel file example.js
//  o il suo equivalente rinominato

var scenes_ext = [
    example
];


//          NON MODIFICARE QUESTA SEZIONE
//====================================================
var scenes = {};

var key_in_scenes
for (var i in scenes_ext){
    for (var key in scenes_ext[i]) {
        scenes[key] = scenes_ext[i][key];
    }
}

console.log(scenes);
 
 viewer = pannellum.viewer('panorama', {   
        "default":pannellum_settings,
        "scenes":scenes
})
//====================================================






//Funzione per la creazione del mirino (non indispensabile)
//====================================================
var pointer_div = document.createElement('div');
document.getElementById("panorama").appendChild(pointer_div);
pointer_div.id = "pointer";
Object.assign(pointer_div.style, {
    height: "10px",
    width: "10px",
    borderRadius: "5px",
    border: "2px solid #000000",
    position: "absolute",
    zIndex: 5,
    top: (document.getElementById("panorama").offsetHeight/2+5) + "px",
    left: (document.getElementById("panorama").offsetWidth/2-5) + "px"
});
//====================================================






//  Ritorno dei valori di pitch e yaw nella console
//====================================================
viewer.on('mousedown', function(event) {
    // For pitch and yaw of center of viewer
    console.log("Pitch: ", viewer.getPitch());
    console.log("Yaw: ", viewer.getYaw());
    // For pitch and yaw of mouse location
    //console.log(viewer.mouseEventToCoords(event));
    console.log('-----');
    var pointer = document.getElementById("pointer");
    pointer.top = (document.getElementById("panorama").offsetHeight/2+5) + "px";
    pointer.left = (document.getElementById("panorama").offsetWidth/2-5) + "px"
    console.log((document.getElementById("panorama").offsetWidth/2-5) + "px")
});
//====================================================






//da qua in poi creare le funzioni che si vogliono utilizzare per il testing