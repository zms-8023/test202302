var esico = document.getElementById('icolist').getElementsByTagName('li');
var eicolist = document.querySelector('#icolist');
var eimglist = document.querySelector('#imglist');
var etest = document.querySelector('#test');
var eprev = document.querySelector('.prev');
var enext = document.querySelector('.next');
var left = 0;
var timer;
esico[2].style.backgroundColor = 'red';
run();
// alert(Math.floor(4070/1020));
function run(){
if (left <= -4080) {
     left = 0;
  }
var m = Math.floor(-left/1020) ;
imglist.style.marginLeft = left + 'px';
var n = (left % 1020 == 0) ? n = 1200 : n = 6;
left -= 10;
icochange(m);
timer = setTimeout(run,n);
}
function icochange(m){

   for (let index = 0; index < esico.length; index++) {

       esico[index].style.backgroundColor = '';

   }

   if (m < esico.length) {
      esico[m].style.backgroundColor = 'red';
   }
}
function imgchange(n){
   let lt = - (n  * 1020)
   imglist.style.marginLeft = lt + 'px';
   left = lt;
}
eprev.onclick = function(){
   let prevgo = Math.floor(-left/1020)-1;
   if (prevgo == -1) {
      prevgo =3;
   }
   imgchange(prevgo);
   icochange(prevgo);
}
enext.onclick = function(){
   let nextgo = Math.floor(-left/1020)+1;
   if (nextgo == 4) {
      nextgo =0;
   }
      imgchange(nextgo);
      icochange(nextgo);
}
eicolist.onclick = function(){
   var tg = event.target;
   let ico = tg.innerHTML - 1;
   imgchange(ico);
   icochange(ico);
}
eimglist.onmouseover = function(){
   clearTimeout(timer);
}
eimglist.onmouseout = function(){
   run();
}
