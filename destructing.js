// const numb=[1,2,3,4,5,6];
// let [a,b,c]=numb;
// console.log(a);
// console.log(b);
// console.log(c);

let an="Har har Mahadev"
let[v,f,h]=an.split(" ");
const user={
    emai:"vashisth@54",
    username:"Vasu",
}
const{emai,username}=user;
const{emai:id,username:fop}=user;
// console.log(id);
// console.log(fop);

const details={
    name:"Vashisth",
    age:18,
    commit:{
        job:"full stack web developer",
        occupation:"Engineer",

    },

}
// let arr=[10,12,24,36];
// const{name,age,commit:{job:role,occupation:poop}}=details;
// console.log(name);
// console.log(age);
// console.log(role);
// console.log(poop);
// [sa,,da]=arr;
// console.log(sa);
// console.log(da);

// let firstname="Vashisth";
// let surname="Toshniwal";
// [firstname,surname]=[surname,firstname];
// console.log(firstname);
// console.log(surname);

const top={
    name:"Vashisth",
    rollno:38,
    section:"A1",
}
let{name,rollno,section,gop="NONE"}=top;
console.log(name);
console.log(section);
console.log(gop);