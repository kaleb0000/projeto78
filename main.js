var names = ["Kaleb Bueno","Miqueias Gomes","Camila Frutuoso"];
var png = ".jpg";
var i = 0;
function update(){
    i++
    var N = 2
    if(i > N){
        i = 0;
    }
    var image = names[i].concat(png);
    var text = names[i];
    document.getElementById("fot").src = image;
    document.getElementById("nom").innerHTML = text;
}