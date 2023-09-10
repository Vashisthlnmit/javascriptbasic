// Question-6:
// function checkvalid(a){
//     let pattern="https://www.linkedin.com/in/";
//     let patternle=pattern.length;
//     let flag='gi';
//     let regrex=RegExp(pattern,flag);
//     let y=regrex.test(a);
//     let x=a.length-patternle;
//     if(y===true && x>5 && x<10){
//         console.log("this valid linkedin url");
//     }
//     else{
//         console.log("this is not a valid linkedin url");

//     }

// }
// let x="http://www.linkedin.com/in/vashisth";
// checkvalid(x);


// // Question-5:
// function checkvalidurl(a){
//     let pattern="[http(s)?://www\.a-zA-Z].";
//     let flag='gi';

//     let regr=RegExp(pattern,flag);
   
//     let x=regr.test(a);
    
//     if(x==true){
//         console.log("this is valid url you can run this");
//     }
//     else{
//         console.log("this is not valid url go and check");
//     }

// }
// let a="https://www.google.com";
// checkvalidurl(a);


// Question-1;

// function reverse(a){
//     let b="";
//     let n=a.length;
//     for(let i=n-1;i>=0;i--){
//         b=b+a.charAt(i);
//     }
//     console.log(b);
    

// }
// let a="vashith"
// setTimeout(()=>reverse(a),2000)

//Question-3

// let itemdo=[["soap",2],["towel",10],["fan",80]];
// function conversion(x){
//     let b=[];
//     x.map((el)=>{
//         let y=el[1];
//         y=y*80;
//         el[1]=y;
//         b.push(el);
//     })
//     return b;
// }
// let x=conversion(itemdo);
// console.log(x);

// Question-4
// 
// Question-2
function randomno(){
    let y=Math.floor((Math.random())*10);
    return y;
}
function ser(){
    x=1;
    while(x!=3){
        console.log("the time remaining"+x);
        x++;
    }
}
function hop(){
    setInterval(()=>{
        x=1;
        while(x!=3){
            console.log(x);
            x++
        }
    },1000);
    clearInterval();
    let z=randomno();
    console.log(z);
}
hop();