let menu = document.querySelector('.menu');
let idhome = document.getElementById('idhome');
let idcontact = document.getElementById('idcontact');
let ideduaction = document.getElementById('ideduaction');
let idPricing = document.getElementById('idPricing');
let leavetotop = document.querySelector('.leavetotop');
let ulitems = document.querySelector('.ulitems');
let Mohmed = document.querySelector('.Mohmed');
let changeword = "Mohmed Mahmoud"
let i = 1;


menu.onclick = () =>{
   ulitems.classList.toggle('add');
   menu.classList.toggle('change');
}
idhome.onclick = () => {
 ulitems.classList.remove('add');
 menu.classList.remove('change');
}
idcontact.onclick = () => {
 ulitems.classList.remove('add');
 menu.classList.remove('change');
}
ideduaction.onclick = () => {
 ulitems.classList.remove('add');
 menu.classList.remove('change');
}
idPricing.onclick = () => {
 ulitems.classList.remove('add');
 menu.classList.remove('change');
}
function changeletter(){
  Mohmed.textContent = changeword.slice(0,i),
  i++
}
setInterval(() =>{
  changeletter();
},200 );
window.onscroll = () =>{
  if(window.scrollY>50){
   leavetotop.classList.add('Appears');
  }else{
   leavetotop.classList.remove('Appears');
  }
}
window.onload = () =>{
  if(window.navigator.onLine){
   onLine()
  }else{
   offline()
  }
}