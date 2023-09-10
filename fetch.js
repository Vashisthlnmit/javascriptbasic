// 
fetch("https://type.fit/api/quotes")
.then(function tut(rep){
    return rep.json();
})
.then(function f(value){
    console.log(value);
})
