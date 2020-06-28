var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  var myNew = kittens[3]=("Ralph")
}
destructivelyAppendKitten(myNew);

function destructivelyPrependKitten(){
  var top = kittens.unshift("Bob");
}
destructivelyPrependKitten(top);

function destructivelyRemoveLastKitten(name){
  var remove =kittens.pop()
}
destructivelyRemoveLastKitten(remove);

function destructivelyRemoveFirstKitten(){
  var gone = kittens.shift()
}
destructivelyRemoveFirstKitten();

function appendKitten(name){
var name = kittens[kittens.push("Broom")];
return name
}
appendKitten(name);
