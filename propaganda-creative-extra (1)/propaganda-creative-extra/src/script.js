/////////////////invert button///////////////////////////
const button = document.getElementsByClassName("button")[0];
let toggle = false;
button.addEventListener("click", (e) => {
  toggle = !toggle;

  const notImg = document.querySelector('*');
  const img = document.querySelector('#img2');
  const img2 = document.querySelector('.containerright');
  

  if (toggle) {
    notImg.style.filter = "invert(1)";
    /*double inverts*/
    img.style.filter = "invert(1)";
    img2.style.filter = "invert(1)";
  } else {
    img.style.filter = "invert(0)";
    img2.style.filter = "invert(0)";
    notImg.style.filter = "invert(0)";
  }
});
////////////////////////////////////////////////////////
////////////////LocalStorage alert//////////////////////
if(localStorage.getItem("visited_homepage")=="true"){
  alert('welcome back!')
}
localStorage.setItem("visited_homepage", true);
/////////////////////////////////////////////////////////
/////////////////