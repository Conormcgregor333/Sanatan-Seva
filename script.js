function txttonum() {
  let num = "917000868902";

  let whatsappURL = "whatsapp://send?phone=" + num;
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
