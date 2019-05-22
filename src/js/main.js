//DEFAULT:
//  inserire qui di seguito le impostazioni di pannellum da utilizzare durante i test

var pannellum_settings = {
    "firstScene": "...",        //  <<--- prima immagine
    "autoLoad": true,
    "northOffset": 0,
    "sceneFadeDuration": 1000
}


//          NON MODIFICARE QUESTA SEZIONE
//===================================================
var scenes = {};

var scenes_ext = [

];
var key_in_scenes
for (var key in scenes_ext){
    key_in_scenes++;
    for (var key_i in scenes_ext[key]) {
        scenes[key] = scenes_ext[i][key];
        key_in_scenes++;
    }
}

console.log(scenes);
 
 viewer = pannellum.viewer('panorama', {   
        "default":pannellum_settings,
        "scenes":scenes
})
//====================================================