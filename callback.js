//callback-are the function that consist of function within the function
// function hop(num,func){
//     let x=num*num;
//     console.log(x);
//     func(x);

// }
// function func(x){
//     console.log("The square of following no is",x);
// }
// hop(5,func);

// the synchrous and ansynchrous
// in javascript there are somecertain function which are not there but there are some which are run on environment;
// console.log("The start");
// setTimeout(function f(){
//     console.log("the timer done");
// },3000);
// console.log("The end");
// for(let i=0;i<1000;i++){};

//Promise
function createpromise(){
   return new Promise(function exe(resolve,reject){
    setTimeout(function f(){
        console.log("this is");
        reject("done");
    },3000)
   })
}
console.log("start");
let x=createpromise();
x.then(function f(value){
    console.log("the promise done");
}).catch(function g(value){
    console.log("handled",value);
}).finally(function f(value){
    console.log("function ends",value);
})
console.log("end");