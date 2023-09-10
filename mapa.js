const sentence="please please submit your assignment on time , your assignment are important";
let ans=new Map();
const word=sentence.split(" ");
let a=word.length;
for(let i=0;i<a;i++){
    if(ans.has(word[i])){
        let a=ans.get(word[i]);
        a=a+1;
        ans.set(word[i],a);
    }
    else{
        ans.set(word[i],1);
    }
}
console.log(ans);