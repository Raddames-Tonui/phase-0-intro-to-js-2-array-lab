// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (){
    cats.push("Ralph")
} 
function destructivelyPrependCat(){
    cats.unshift("Bob")
} 
function destructivelyRemoveLastCat(){
    cats.pop()
} 
function destructivelyRemoveFirstCat(){
    cats.shift()
} 
function appendCat(name){
    
    const Broom = [...cats,"Broom"]
    return Broom

} 

function  prependCat(name){
    const newCats = ["Arnold", ...cats]
    return newCats
}
function  removeLastCat(){
    const newCats = cats.slice(0, -1)
    return newCats
}
function  removeFirstCat(){

    const newCats = cats.slice(1);
    return newCats
}