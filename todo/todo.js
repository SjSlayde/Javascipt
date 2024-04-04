var bouttontodo = document.getElementById("buttontodo")
bouttontodo.addEventListener('click', function addElement() {
    texttodo=document.getElementById("texttodo").value
  // crée un nouvel élément div
  var newDiv = document.createElement("li");
  // et lui donne un peu de contenu
  var newContent = document.createTextNode(texttodo);
  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById("test");
  document.getElementById("todo").insertBefore(newDiv, currentDiv);
  
  texttodo=document.getElementById("todopourcentage").value
  var newDiv = document.createElement("li");
  var newContent = document.createTextNode(texttodo+"%");
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById("test2");
  document.getElementById("pourcentage").insertBefore(newDiv, currentDiv);
})

brandom=document.getElementById("random")
brandom.addEventListener('click',function mdprandom(){
  n=Math.floor(Math.random(10)*40)
  console.log(n)
  var alpha="abcdefghijklmnopqrstuvwxyz1234567890".split("");
  var rnd_ltt=alpha[Math.floor(Math.random()*36)]
  mdp=rnd_ltt
for(let i=0;i<n;i++){
var rnd_ltt=alpha[Math.floor(Math.random()*36)];
mdp=mdp + rnd_ltt
console.log(rnd_ltt)
}
console.log(mdp)
})