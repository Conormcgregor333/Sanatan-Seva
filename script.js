function txttonum() {
  let num = "917000868902";
  let message = "Pranam Guruji";
  let whatsappURL = "whatsapp://send?phone=" + num+'?text='+message;
  window.open(whatsappURL, "_blank");
}

/* let x = document.getElementById("reviewbtn");
x.addEventListener("click", () => {
  let name = document.getElementById("firstName").value;
  let cont = document.getElementById("kontainer");
  let crd = document.createElement("div");
  crd.innerHTML += `<h5>${name}</h5>`;
  cont.appendChild(crd);
});
 */
document.getElementById("vid1d").addEventListener("click",()=>{
  vid1.open()
})
document.getElementById("vid2d").addEventListener("click",()=>{
  vid2.open()
})

document.getElementById("vid3d").addEventListener("click",()=>{
  vid3.open()
})

document.getElementById("vid4d").addEventListener("click",()=>{
  vid4.open()
})

document.getElementById("vid5d").addEventListener("click",()=>{
  vid5.open()
})

document.getElementById("vid6d").addEventListener("click",()=>{
  vid6.open()
})

document.getElementById("vid7d").addEventListener("click",()=>{
  vid7.open()
})


