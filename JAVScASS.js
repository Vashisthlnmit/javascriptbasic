// question-1

function checklist(arr,name){
    let y=false;
    for(let i=0;i<arr.length;i++){
       if(arr[i]==name){
        y=true;
        break;
       }
    }
    if(y){
        console.log("yes your name is in the checklist");
    }
    else{
        console.log("your name is not in the list");
    }

}
let arro=["vasu","shibu","himi","pooja"]
//checklist(arro,"palak");
//question-4
function marketing(arr){
    let min=Number.MAX_SAFE_INTEGER;
    let amin=0;
    let max=Number.MIN_SAFE_INTEGER;
    let amax=0;
    for(let i=0;i<arr.length;i++){
        // for maximum value
        if(arr[i].price>max){
            max=arr[i].price;
            amax=i;
        }
        // for minium
        if(arr[i].price<min){
            min=arr[i].price;
            amin=i;
        }
    }
    console.log("the product with maximum amount is "+" "+arr[amax].name+" which is priced at Rs"+arr[amax].price);
    console.log("the product with maximum amount is"+arr[amin].name+" which is priced at Rs"+arr[amin].price);
    
}
const product =[{name:"laptop",price:12000},{name:"mobile",price:7000},{name:"laptop bag",price:2000},{name:"watch",price:2000},{name:"mobilechargeer",price:1500}]
marketing(product)
// question-6
const productdetail={
    name:"Apple 2020 Macbook Air laptop",
    price:8200,
    color:"grey",
    harddisk: "256 gb"
}
//console.log("below are the product details")
//console.log("name:"+" "+productdetail.name);
//console.log("price:"+" "+productdetail.price);
//console.log("color:"+" "+productdetail.color);
//console.log("harddisk:"+" "+productdetail.harddisk);
// question-7
function otpgenerator(){
    let x=Math.floor((Math.random()+1)*1000);
    return x;  
}
//console.log(`here is your otp :${otpgenerator()}`);
//question-3
function checkresult(arr,name){
    let user=false;
    for(let i=0;i<arr.length;i++){
        if(arr[i].name==name){
            if(arr[i].marks>90){
                console.log(`Congrulation ${name} !`+"you have cleared the exam");
                user=true;
            }
            else{
                console.log("you have not cleared the examination");
                user=true;
            }
            break;
        }
        
    }
    if(user==false){
        console.log("sorry! invalid user name");
    }
}
const student=[
{
    name:"Mithun",
    marks:95,
},
{
    name:"Prabir",
    marks:75,

},
{
    name:"Alka",
    marks:92,
},
{
    name:"Shivam",
    marks:70,
},
{
    name:"Farman",
    marks:99,
}
]
//checkresult(student,"Prabir")
//question-8
const eventdate='2023-08-31'

const data=new Date(year,month,day);
console.log(data);

