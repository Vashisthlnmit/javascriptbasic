const temp={
    name:'palak',
    age:19,
    salary:100000,
}
console.log(Object.keys(temp));
console.log(Object.values(temp));
// let x=Object.assign({},temp);
// console.log(x);
// console.log(x===temp);
// let x=Object.entries(temp);
// console.log(x);
// console.log(Object.fromEntries(x));
// FROZEN AND SEALED
// temp.age=20;
// console.log(temp);
// Object.freeze(temp.name);
// temp.age=23;
// console.log(temp)
// console.log(Object.isFrozen(temp.name));
// temp.status='single';
// console.log(temp);
// Object.seal(temp);
// temp.martial='unmarried'
// console.log(temp);
//let x =Object.getOwnPropertyDescriptors(temp)
//console.log(x);
const obj={};
Object.defineProperties(obj,{
    intro:{
        value:'palak',
        writable: true,
    
    }

})
console.log(obj.intro.defineProperties);
let b="abc";
b.length();
