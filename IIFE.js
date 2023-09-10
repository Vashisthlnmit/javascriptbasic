// IIFE-(immediately1Invoked1Function1Expression1)
(()=>{
    console.log("this is your world");
})();

((a,b)=>{
    console.log(a+b);
})(3,4);

//Application of IIFE

// Privacy 


// (()=>{
//     let pass="43241";
//     const showpass=()=>{
//         console.log("SHOW PASWORD",pass);
//     };
//     showpass();
// })();
// showpass();

//Avoid global polluting

let greet="Good Morning sir";
let wel="How are you";

// (()=>{
//     const greet="Good Evening maam";
//     const wel="Do you want anything else";
//     console.log(greet);
//     console.log(wel);
// })();
// console.log(greet);
// console.log(wel);

// Function Currying;

function volume(length){
    return function(breadth){
        return function(Height){
            return length*breadth*Height;
        };
    };
}
let x=volume(9)(12)(2);
console.log(x);
