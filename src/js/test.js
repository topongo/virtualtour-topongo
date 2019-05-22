var scenes = {};

var scenes_ext = [
    torriani,
    torriani2
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
        "default": {
            "firstScene": "aulamagna",
            "autoLoad": true,   
            "author": "Fabbrica Digitale",
            "compass": true,
            "northOffset": 243,
            "sceneFadeDuration": 1000
        },
        "scenes":scenes
})
