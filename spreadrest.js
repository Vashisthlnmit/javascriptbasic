// let arr=["HTML","CSS","JAVASCRIPT","NODE JS"];
// let arg=[...arr,"SQL","MONGO DB"];
// console.log(arg);

// let arr=[1,2,3,4];
// let arr1=[5,6,7,8];
// let arr2=[...arr,...arr1];
// console.log(arr2);

// let a="Vashisth";
// let b="Toshniwal";
// let c=[...a,...b];
// console.log(c);

// function max(num1,num2,num3,num4){
//     return Math.max(num1,num2,num3,num4);
// }
// console.log(max(...arr));

// let obj={
//     name:"Vashisth",
//     course:"Engineering",
//     rating:4.5

// }
// let obg={
//     branch:"ECE",
//     courseduration:"4years",
//     rating:5
// }
// let gop={...obj,...obg};
// console.log(gop);

let arr=["HTML","CSS","JAVASCRIPT","GITHUB"];
let[a,...remaining]=arr;
console.log(a);
console.log(remaining);