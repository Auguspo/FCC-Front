function play(name) {

  if (document.getElementById(name) != null) {
    let audio = document.getElementById(name);
    console.log(name)
    audio.play();
  }


}

window.document.onkeyup = function (event) {
  play((event.key).toUpperCase())

  let text = ""
  if (document.getElementById((event.key).toUpperCase()) != null)

    switch ((event.key).toUpperCase()) {
      case "Q":
        text = "Heater 1"
        break;
      case "W":
        text ="Heater 2"
        break; 
      case "E":
        text ="Heater 3"
        break;
      case "A":
        text ="Heater 4"
        break;
      case "S":
        text ="Clap"
        break;
      case "D":
        text = "Open HH"
        break;
      case "Z":
        text ="Kick-n'-Hat"
        break;
      case "X":
        text ="Kick"
        break;
      case "C":
        text = "Closed HH"
        break;
        
       default:
        console.log("ERROR");
    }

  document.getElementById("display").innerText = text
}

