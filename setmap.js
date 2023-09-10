// set
let a=new Set();
 let b=[3,4,6,3,9,10,4];
 for(let i=0;i<b.length;i++){
     a.add(b[i]);
 }
 console.log(a);
 a.delete(9);
 console.log(a);
const data={
    name:'Vashisth',
    age:18,
}
 a.add(data);
// console.log(a.entries())
// function multiply(valu1,valu2){
//     console.log(`data${valu1} : data${valu2}`);
// }
// a.forEach(multiply)
// let x=a.has(3);
// console.log(x);
// console.log(a.keys());
// let c=Array.from(a);
// console.log(c);

// map
// 
let af=new Map();
console.log(af.keys());

