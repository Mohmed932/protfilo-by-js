let menu = document.querySelector('.menu');
let idhome = document.getElementById('idhome');
let idcontact = document.getElementById('idcontact');
let ideduaction = document.getElementById('ideduaction');
let idPricing = document.getElementById('idPricing');
let leavetotop = document.querySelector('.leavetotop');
let offline = document.querySelector('.offline');
let ulitems = document.querySelector('.ulitems');
let Mohmed = document.querySelector('.Mohmed');
let black = document.querySelector('.black');
let dark = document.getElementById('dark');
let fristbtn = document.querySelector('.fristbtn');
let oneinput = document.querySelector('.oneinput');
let twoinput = document.querySelector('.twoinput');
let threeinput = document.querySelector('.threeinput');
let fourinput = document.querySelector('.fourinput');
let fiveinput = document.querySelector('.fiveinput');
let Name = document.querySelector('.Name')
let PHONE = document.querySelector('.PHONE');
let email = document.querySelector('.email');
let Subject = document.querySelector('.Subject');
let Message = document.querySelector('.Message');
let changeword = "Mohmed Mahmoud"
let i = 1;

fristbtn.onclick = ()=>{
  if(oneinput.value  !==''){
   Name.textContent = ''
  }else{
   Name.textContent = 'Name is required'
  }
}

let sui = 'Hellow'
fristbtn.onclick = ()=>{
  if(twoinput.value  !==''){
   PHONE.textContent = ''
  }else{
   PHONE.textContent = 'PHONE is required'
  }
}
fristbtn.onclick = ()=>{
  if(threeinput.value  !==''){
   email.textContent = ''
  }else{
   email.textContent = 'invalid email address'
  }
}
fristbtn.onclick = ()=>{
  if(fourinput.value  !==''){
   Subject.textContent = ''
  }else{
   Subject.textContent = 'Subject is required'
  }
}
fristbtn.onclick = ()=>{
  if(fiveinput.value  !==''){
   Message.textContent = ''
  }else{
   Message.textContent = 'Message is required'
  }
}
oneinput.onclick = ()=>{
 oneinput.classList.add('hoverinput');
 twoinput.classList.remove('hoverinput');
 threeinput.classList.remove('hoverinput');
 fourinput.classList.remove('hoverinput');
 fiveinput.classList.remove('hoverinput');
}
twoinput.onclick = ()=>{
 oneinput.classList.remove('hoverinput');
 twoinput.classList.add('hoverinput');
 threeinput.classList.remove('hoverinput');
 fourinput.classList.remove('hoverinput');
 fiveinput.classList.remove('hoverinput');
}
threeinput.onclick = ()=>{
 oneinput.classList.remove('hoverinput');
 twoinput.classList.remove('hoverinput');
 threeinput.classList.add('hoverinput');
 fourinput.classList.remove('hoverinput');
 fiveinput.classList.remove('hoverinput');
}
fourinput.onclick = ()=>{
 oneinput.classList.remove('hoverinput');
 twoinput.classList.remove('hoverinput');
 threeinput.classList.remove('hoverinput');
 fourinput.classList.add('hoverinput');
 fiveinput.classList.remove('hoverinput');
}
fiveinput.onclick = ()=>{
 oneinput.classList.remove('hoverinput');
 twoinput.classList.remove('hoverinput');
 threeinput.classList.remove('hoverinput');
 fourinput.classList.remove('hoverinput');
 fiveinput.classList.add('hoverinput');
}

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
window.addEventListener("onLine",()=>{
 onLine();
})
window.addEventListener("offline",()=>{
 offline();
})
function onLine(){
 offline.classList.add('offlinenow');
}
function offline(){
 offline.classList.remove('offlinenow');
}