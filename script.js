function txttonum() {
  let num = "917000868902";
  let message = "Pranam Guruji";
  let whatsappURL = "whatsapp://send?phone=" + num+'?text='+message;
  window.open(whatsappURL, "_blank");
}

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
document.getElementById("vidnew1").addEventListener("click",()=>{
  vid8.open()
})
document.getElementById("vidnew2").addEventListener("click",()=>{
  vid9.open()
})
document.getElementById("vidnew3").addEventListener("click",()=>{
  vid10.open()
})
document.getElementById("vidnew4").addEventListener("click",()=>{
  vid11.open()
})
document.getElementById("vidnew5").addEventListener("click",()=>{
  vid12.open()
})

document.getElementById("vidnew6").addEventListener("click",()=>{
  vid13.open()
})
document.getElementById("vidnew7").addEventListener("click",()=>{
  vid14.open()
})
document.getElementById("vidnew8").addEventListener("click",()=>{
  vid15.open()
})

function dateDiff(date1, date2) {
  const years = date2.getFullYear() - date1.getFullYear();
  const months = date2.getMonth() - date1.getMonth();
  const days = date2.getDate() - date1.getDate();

  let diffYears = years;
  let diffMonths = months;
  let diffDays = days;

  if (diffDays < 0) {
    diffMonths -= 1;
    const prevMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
    diffDays += prevMonth.getDate();
  }

  if (diffMonths < 0) {
    diffYears -= 1;
    diffMonths += 12;
  }
  let x = diffYears * 365 + diffMonths * 30 + diffDays;
  if (x <= 31) {
    return x + " days ago";
  } else if (x < 12 * 30) {
    return diffMonths + " months ago";
  } else {
    return diffYears + " years ago";
  }
}

/* const date1 = new Date("2023-12-15");
const date2 = new Date();

const diff = dateDiff(date1, date2);
console.log(diff);


 */
let posted=["2024-05-15","2024-05-16","2024-05-17","2024-05-18","2024-05-19","2024-05-20","2024-05-21","2024-05-23"]
let counter=1
posted.map((index)=>{
  let z="day"+counter
  const date1 =new Date(index);
 
  const date2 = new Date();
  let d=dateDiff(date1, date2)
  document.getElementById(z).innerText=d;
  counter+=1

}) 