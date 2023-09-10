// function gout(){
//     let gout=2;
//     return function (){
//         return gout+2;
//     }
// }
// let d=gout();
// console.log(d);

function parent(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}
const inc=parent();
inc();
inc();