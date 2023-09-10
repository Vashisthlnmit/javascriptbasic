// call and apply method;
function greeting(city,age){
    console.log(`hello, this side ${this.name} from ${city} and of ${age}`);
}
const yup={
    name:"vashisth",

}
const gop={
    name:"vasu"
}
//greeting.apply(gop,['delhi',45]);
//greeting.call(yup,'gzb',56);
// bind method
let x=(greeting.bind(yup,'delhi',56));
console.log(x);