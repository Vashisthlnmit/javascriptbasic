// question-1;
// function double(x,doi){
//     let arr=[];
//     let a=doi(arr,x);
//     return a;
// }
// function doi(x,y){
//     let n=y.length;
//     for(let i=0;i<n;i++){
//         let z=y[i]*2;
//         x.push(z);
//     }
//     return x;
// }
// x=[4,5,6,9];
// double()

//question-3;
// function ageindays(first,last,age,pop){
//     let fullname=first+" "+last;
//     let ageinday=age*365;
//     pop(fullname,ageinday);
    
// }
// function pop(full,age){
//     console.log("The person's full name is "+full+" , and their age in days "+age);

// }
// let fop="Vashisth";
// let lop="Toshniwal";
// let rp=18;
// ageindays(fop,lop,rp,pop);

//question-4
// function book(arr,uop){
//     let a=[];
//     arr.map((el,index)=>{
//         a.push(el[0]);
//     })
//     uop(a);
// }
// function uop(arr){
//     arr.sort();
//     let n=arr.length;
//     for(let i=0;i<n;i++){
//         console.log(arr[i]);
//     }
// }
// let roop=[["The wings","AP",2009],["Harry","Ruskbin",2005],["Half girfriend","Chetan bhagat",2013],["CHampak","sunia",2007]];
// book(roop,uop);

//question-2
// let v="abc";

// function manipulatestring(a,logst){
//     let s="";
//     let n=a.length;
//     for(let i=0;i<n;i++){
//         let x=a.charAt(i);
//         x=x.toLocaleUpperCase();
//         s=s+x;
//     }
//     logst(s);
// }
// function logst(n){
//     console.log("The manipulated String is :",n);
// }
// let r="Hello world!"
// manipulatestring(r,logst);

//question-5
// function resolver(){
//     return new Promise(function exe(resol,reject){
//         resol("Hello ,");
//     })

    
// }
// // 
// async function consu(v){
//     const s= await resolver();
//     console.log(s,v);
// }
// let b="baba";
// consu(b);

//question-6

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(function f(rep){
//     return rep.json();
// }).then(function f(val){
//     console.log(val);
// })

// question-7
// function ricket(){
//     let result=new Map();
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(function f(rep){
//         return rep.json();
//     }).then(function f(val){
//        console.log("the todo =>",val);
//     })
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(function f(rep){
//         return rep.json();
//     }).then(function f(val){
//         console.log("the post =>",val);
//     } )
    
// }
// ricket();

// // question-9

//     fetch("at https://jsonplaceholder.typicode.com/posts/123456789")
//     .then(function f(rep){
//         return rep.json();
//     }).then(function f(val){
//         console.log("the post =>",val);
//     }).catch(
//         console.log("sorry we cannot load")
//     );

// question-8
// l=[];


// fetch( "https://jsonplaceholder.typicode.com/posts")
// .then(function f(rep){
//     return rep.json();
// }).then(function f(val){
//     console.log(val);
// })


