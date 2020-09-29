function addBola() {
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    var p1 = Math.floor(Math.random() * 100);
    var p2 = Math.floor(Math.random() * 100);
    bola.setAttribute("style", "left:"+p1+"%;top:"+p2+"%;");
    bola.setAttribute("onclick", "estourar(this)");
    document.body.appendChild(bola);
}
function estourar(elemento) {
    document.body.removeChild(elemento);
}
function iniciar() {
    setInterval(addBola, 1000);
}
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      
        getElementByClass = bgColor;
    }
    
    random_bg_color();
