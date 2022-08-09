const boxs = document.getElementById("sad");
const boxh = document.getElementById("happy");
const boxst = document.getElementById("straight");
const hcolor = document.getElementById("circle");
let eye = document.getElementById("eye");
let weye = document.getElementById("weye");
const btnc = document.getElementById("btnc");
const btns = document.getElementById("btns");
const btnh = document.getElementById("btnh");
const btnst = document.getElementById("btnst");
const btnmove = document.getElementById("btnmove");
const eyeloc = eye.getAttribute("cy");
const eyelocx = eye.getAttribute("cx");
const weyeloc = Number(weye.getAttribute("cy")) + 10;
btns.addEventListener("click", function handleClick() {
  sad.style.display = "block";
  happy.style.display = "none";
  straight.style.display = "none";
});
btnh.addEventListener("click", function handleClick() {
  sad.style.display = "none";
  happy.style.display = "block";
  straight.style.display = "none";
});
btnst.addEventListener("click", function handleClick() {
  straight.style.display = "block";
  sad.style.display = "none";
  happy.style.display = "none";
});
//  btnc.addEventListener('click', function handleClick() {
//   if(circle.style.display === 'block'){
//   circle.style.display ='none'
//   rect.style.display ='block'
//   } else {
//     circle.style.display ='block'
//     rect.style.display ='none'
//   }
// });

btnmove.addEventListener("click", function handleClick() {
  eye.setAttribute("cx", 70);
  let e = eye.getAttribute("cy");
  eye.setAttribute("cy", Number(e) + 10);
  let f = eye.getAttribute("cy");
  if (f > weyeloc) {
    eye.setAttribute("cy", eyeloc);
    eye.setAttribute("cx", eyelocx);
  }
});

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
