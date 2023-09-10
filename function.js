let a=12;
let b=34;
console.log(a+b);
function add(a,b=68){
    console.log(a+b);
}


function good(name){
   return name;
}
let y=good('basu');
console.log(y);
const arr=[3,6,9,11,21];
function hope(arr){
   for(let i=0;i<arr.length;i++){
    console.log(arr[i])
   }
}
//hope(arr);

function unlimited(){
    console.log(arguments)
    return arguments;
}
function greeting({name,city}){
    console.log(`hello this ${name} from ${city}`)
}
function foodie(){
    const array=Array.from(arguments);
    console.log(arguments)
    console.log(array);
    let sum=array.reduce(function(acc,curr){
        return acc+curr
    },0)
    return sum;
}
    
let x=foodie(1,2,3,4,5)
console.log(x)