function afficheImg(image){//affiche un jolie papillon en 204pvoire un pixel
    element = document.getElementById("img");
    element.src = "cartoon-happy-caterpillar-on-white-background-free-vector.jpg";
}
afficheImg()


var img1 = new Image();
img1.src ="papillon.jpg";


var x,y
x = prompt("saisir un chiffre")
y = prompt("saisir un multiplacateur")
produit(x,y)

function produit(x,y){
    calcul=(x*x*x)//fait le calcul du de la valeur du cube d x
    calcul= x * y//multiplie x par y
    document.getElementById("demo").innerHTML = x+" x "+y+" = "+calcul
    document.getElementById("yop").innerHTML = "le cube de "+x+" vaut "+calcul
}