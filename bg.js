let colarr=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let n=colarr.length;
let body=document.body;
let text=document.getElementById('text');
let button=document.getElementById('popm');
button.addEventListener('click',()=>{
    let hexcolor=generate();
    body.style.backgroundColor=hexcolor;
    text.textContent=hexcolor;

    
})
function generate(){
    let hex='#';
    for(let i=0;i<6;i++){
        hex=hex+colarr[randomno()];
    }
    return hex;

}
function randomno(){
    let x=Math.floor(Math.random()*n);
    return x;
}