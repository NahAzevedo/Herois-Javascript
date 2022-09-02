function verificarHeroi(){
    let universo = document.querySelector("input[name=universo]:checked").value;
    let heroi = document.getElementById("heroi").value.toUpperCase();
    let img = heroi.toLowerCase().replace(/ /g, "-");
  
    let heroisDc = ["ANJO","LANTERNA VERDE","MULHER MARAVILHA","MUTANO","WOLVERINE", "BATMAN", "ROBIN", "SUPER MAN"];
    let heroisMarvel = ["CAPITÃ MARVEL","DOUTOR ESTRANHO","FEITICEIRA ESCARLATE","GAMORA","HULK", 
    "LOKI", "THOR", "PANTERA NEGRA"];
  
    if(universo == "DC"){
      heroisDc.indexOf(heroi) > -1 ? document.getElementById("mostrarHeroi").innerHTML = 
      "<p>Você escolheu o herói: <br><img src='images/" + img + ".jpg'><br>" : document.getElementById("mostrarHeroi").innerHTML = 
      "<p>O herói digitado não foi encontrado.</p>";
    }
    else if(universo == "Marvel"){
      heroisMarvel.indexOf(heroi) > -1 ? document.getElementById("mostrarHeroi").innerHTML = 
      "<p>Você escolheu o herói: <br><img src='images/" + img + ".jpg'><br>" : document.getElementById("mostrarHeroi").innerHTML = 
      "<p>O herói digitado não foi encontrado.</p>";
    }
    else{
      document.getElementById("mostrarHeroi").innerHTML =
      "<p>Nenhum universo foi selecionado. Tente novamente..</p>";
    }
  }