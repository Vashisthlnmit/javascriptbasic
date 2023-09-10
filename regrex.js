// regex works to find the pattern and undersstand the pattern in text using flag
let pattern='pw';
let flag='gi';
let stripa="loremks   jkahlk  jfk  PW jPWkiod pw PW pW";
// this pattern is used to fetch and match pattern using object of pattern and flag
let regex=new RegExp(pattern,flag);

let y=regex.test(stripa);
console.log(y);
// CHECK through string

let g=stripa.match(regex);
console.log(g);
let a=stripa.replace(regex,'p=w');
console.log(a);
