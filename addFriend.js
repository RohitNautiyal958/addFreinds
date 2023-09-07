let h3 = document.querySelector("h3");
let flag = 0;

document.querySelector("#add").addEventListener("click", () => {
  if (flag === 0) {
    h3.innerHTML = "Freinds";
    h3.style.color = "green";
    flag = 1;
  } else {
    h3.innerHTML = "Stanger";
    h3.style.color = "rgb(238, 6, 6)";
    flag = 0;
  }
});

// document.querySelector("#remove").addEventListener("click", () => {
//   h3.textContent = `Strange`;
//   h3.style.color =  "rgb(238, 6, 6)"
// });
