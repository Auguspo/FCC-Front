function play(name){

    if (document.getElementById(name) !=null) {
    let audio = document.getElementById(name);
    console.log(name)
    audio.play();}
}

window.document.onkeyup = function(event) {
   play((event.key).toUpperCase())
 if (document.getElementById((event.key).toUpperCase()) !=null)
  { let audio= document.getElementById((event.key).toUpperCase()).src.split("clip/").pop().split(".mp3")[0].replace(/%20/g, " ");
 document.getElementById("display").innerText = audio
}}

