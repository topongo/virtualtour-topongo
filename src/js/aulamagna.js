
var current_image = 1;
var aulamagnaHS = [
    {
        "pitch":0,
        "type":"info",
        "yaw":-149,
        "cssClass":"hotspot",
        "createTooltipFunc":hotspot,
        "createTooltipArgs":"L'aula Magna chiamata Aula Giorgio Stringhini, possiede una superficie totale di 1400 mq disposta su due piani, mentre la sua cubatura misura 20000 mc ca.<br>L'aula è in grado di accogliere 328 posti in platea, 140 in galleria; e può ospitare fino ad un massimo di 499 persone.<br>Nell'aula vi è un palco con tavolo conferenze, impianto di amplificazione audio, 2 piastre di registrazione, videoregistratore, videoproiettore, schermo, possibilità di collegamento per videoconferenze, un Notebook."
    },
    {
        "pitch":0,
        "type":"info",
        "yaw":-109,
        "cssClass":"hotspot",
        "createTooltipFunc":hotspot,
        "createTooltipArgs":"Il 12 Febbraio 2019 si è tenuto in Aula Magna l'evento \"Cremona Breakfast\", tassello locale dell'evento globale \"Global Women's Breakfast\", promossa dalla IUPAC in occasione del suo centenario. In maggio si terrà la tradizionale Notte dei Musei al Torriani, che quest'anno, centocinquantenario della scoperta di Mendeleev, si intitolerà TAVOLE. Dalla tavola periodica al tablet. A collegare idealmente i due momenti, la conferenza IL COSMO IN TAVOLA del prof. Cristian Gambarotti."
    },
    {
        "pitch":0,
        "type":"info",
        "yaw":-155,
        "cssClass":"hotspot",
        "createTooltipFunc":hotspot,
        "createTooltipArgs":"Il 15 e 16 febbraio 2019 settanta studenti si sono riuniti al Torriani per progettare la scuola del futuro. Le scuole di provenienza: Aselli, Romani di Casalmaggiore e, ovviamente, l'Istituto ospitante.<br>Ad organizzare i due giorni full immersion sono Impactscool e Fabbricadigitale con Adecco con partner coinvolto attivamente, Net4market ed Eurotecno come sostenitori del progetto.<br>I progetti si sono articolati in tre tematiche: metodologie didattiche, integrazione e rapporto tra scuola e mondo del lavoro."
    },
    {
        "pitch":-4,
        "yaw":103,
        "type":"scene",
        "sceneId":"atrio1",
        "cssClass":"frAvanti"
    }
]

function create_text(hotSpotDiv,arg){
    hotSpotDiv.classList.add('aulamagna_text');
    var icon = document.createElement('img');
    icon.setAttribute('src','img/info_point.png');
    icon.classList.add('aulamagna_text_icon');
    hotSpotDiv.appendChild(icon);
    var div = document.createElement('div');
    var title = document.createElement('h1');
    div.appendChild(title);
    hotSpotDiv.appendChild(div);
    div.classList.add('aulamagna_text_text');
    var text = document.createElement('p');
    div.appendChild(text);
    text.innerHTML = arg.text;
    title.innerHTML = arg.title;
    
}

function create_gallery(hotSpotDiv,args){
    hotSpotDiv.classList.add('aulamagna_gallery');
    var div = document.createElement('div');
    var icon = document.createElement('img');
    icon.classList.add("aulamagna_gallery_icon");
    div.appendChild(icon);
    icon.setAttribute('src','./img/aulamagna/gallery.png');
    hotSpotDiv.appendChild(div);
    icon.addEventListener("click",function(e){
        var gallery = document.createElement('div');
        gallery.classList.add('aulamagna_gallery_popup');
        hotSpotDiv.appendChild(gallery);
        var img = document.createElement('img');
        img.className = "aulamagna_gallery_image";
        var next = document.createElement('img');
        next.classList.add('aulamagna_gallery_next');
        var previews = document.createElement('img');
        previews.classList.add('aulamagna_gallery_previews');
        previews.setAttribute('src','https://img.icons8.com/ios/50/000000/circled-left.png');
        next.setAttribute("src","https://img.icons8.com/ios/50/000000/circled-right.png");
        img.setAttribute('src','img/aulamagna/1.png');
        gallery.appendChild(previews);
        gallery.appendChild(img);
        gallery.appendChild(next);
        next.addEventListener("click",function(){
            if(current_image != 3){
                current_image++;
                img.setAttribute('src',"img/aulamagna/" + current_image + '.png');
                }
        })
        previews.addEventListener("click",function(){
            if(current_image != 1){
            current_image--;
            img.setAttribute('src',"img/aulamagna/" + current_image + '.png');
            }
        })
    });
}

function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('aulamagna_hotspot');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = 400 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}