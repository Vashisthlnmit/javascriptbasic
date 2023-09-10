// THE HOF is high order function which there are some complex which can by including the nestiong function
// let x=(a,b)=>{
//     return a+b;
// }
// console.log(x(3,4));
//Example of high order function
// set timeout and settimeinterval
// let arr=[67,209,2091,910,9149,947];
// function print(){
//     arr.forEach((el)=>{
//         console.log(el);
//     })
// }
// setTimeout(print,2000);

// each,map,filter,reduce function
let arr=[1,2,4,15,8,21];
// let y=arr.map((el,index)=>(console.log(el.toUpperCase(),index)));
// filter function
// let b=arr.filter((m)=>{
//     return m.endsWith('bo')
// })
// console.log(b);

// some  function
const even=x=>x%2===0;
console.log(arr.some(even));

// find index function
const great=x=>x>14;
let xc=arr.findIndex(great);
console.log(xc);