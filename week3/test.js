const element = document.getElementById('g')
console.log(element.innerText);
// new
const add = document.getElementById('btn1');

console.log(add.innerHTML)
add.addEventListener('click',function(){
    let x = element.innerHTML
    x=Number(x)
    element.innerHTML = x+1
});
 const sub = document.getElementById('btn2');
 sub.addEventListener('click',function(){
    let x = element.innerHTML
     x=Number(x)
    element.innerHTML = x-1
 });
