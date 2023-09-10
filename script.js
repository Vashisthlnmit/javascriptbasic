// let a=document.getElementById("lgi");
// let b=document.getElementById("lgo");
// let c=document.getElementById("pop");
// update();
// a.addEventListener('click',()=>{
//     localStorage.setItem("isloggedin",true)
//     update();
// })
// b.addEventListener('click',()=>{
//     localStorage.removeItem("isloggedin");
//     update();
// })
// function update(){
//     let a=localStorage.getItem("isloggedin");
//     if(a){
//         c.textContent="user your are logined in"
//     }
//     else{
//         c.textContent="User has not logged in"
//     }

// }
// question-5
// let a=document.getElementById('jpp')
// let b=document.getElementById('kkp')
// let c=document.getElementById('hip')
// function syntax(){
//     if(b.classList=='hop'){
//         c.textContent="your image is hidden"
//     }
//     else{
//         c.textContent="your image is visible"
//     }
// }
// let cx= a.addEventListener('click',()=>{
//     b.classList.toggle('hop');
//     syntax();

// })

// let a=document.getElementById('jjp');
// let b=document.getElementById('fgh');
// let c=document.body;
// function syntax(){
//     if(a.classList=='hop'){
//         a.textContent="This is darkmode"
//         c.style.backgroundColor='black'
//     }
//     else{
//         a.textContent="This is lightmode"
//         c.style.backgroundColor='white'
//     }

// }
// b.addEventListener('click',()=>{
//     a.classList.toggle('hop');
//     syntax();
// })
// function updateTime() {
//     var now = new Date();
//     var hours = now.getHours().toString().padStart(2, '0');
//     var minutes = now.getMinutes().toString().padStart(2, '0');
//     var seconds = now.getSeconds().toString().padStart(2, '0');
//     var hexCode = '#' + hours + minutes + seconds;

//     var timeDisplay = document.getElementById('time-display');
//     timeDisplay.textContent = hours + ':' + minutes + ':' + seconds;
//     document.body.style.backgroundColor = hexCode;

//     setTimeout(updateTime, 1000); // Update every second
//   }

//   updateTime(); // Start the update immediately

// question-form


// et name = document.getElementById("name").value;
// let email = document.getElementById("email");
// let passw = document.getElementById("pass");
// function valueans() {
//   let name = document.getElementById('name').value;
//   let passw = document.getElementById('pass').value;

//   if (name.length>= 8 && passw.length>= 3) {
//     alert("Form is sucessfully submitted")
//   }
//   else {
//     alert("please check whether password is less than 3 digit or name is less than 8 character")
//   }

// }
// let b=document.getElementById('hpo')
// b.addEventLisltener('click',()=>{
//   valueans();
// })

// let a=document.getElementById('plus');
// let b=document.getElementById('data');
let c=document.getElementById('substract');
// let x=document.getElementById('data').innerHTML;



// function counter(d){
//   let v=document.getElementById('data');
//   let b=document.getElementById('data').innerHTML;
//   let c=Number(b);
//   if(d=='+'){
//     c=c+1;
//     v.textContent=c;
//   }
//   if(d=='-'){
//     c=c-1;
//     if(c>0){
//       v.textContent=c;
//     }
//     else{
//       alert("the negative is not countered here")
//     }
    
//   }
  
// }
// a.addEventListener('click',()=>{
//   counter('+');
// })
// c.addEventListener('click',()=>{
//   counter('-');
// })

// let array=['Javascript','Python','Java','C++']
// function addoption(){
//   let d=document.getElementById("dropdown");
//   for(let i=0;i<array.length;i++){
//     let b=document.createElement('option');
//     b.textContent=array[i];
//     d.appendChild(b);
//   }
// }
// addoption();
 let x=document.getElementById('input');
 let y=document.getElementById('unorder');
 let array=["HTML","TAILWIND CSS","GitHub","JAVASCRIPT"];
 for(let i=0;i<array.length;i++){
   let a=document.createElement('li');
   a.textContent=array[i];
   y.appendChild(a);

 }
 x.addEventListener('input',() =>{
  let a=x.value.toLowerCase();
  for(let i=0;i<array.length;i++){
    const item=array[i];
    if()
  }
 })


