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
//===================================================
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