// Code for adding divs of different colors like poppers on the screen
let main = document.querySelector("main");
let btn = document.querySelector("#start");
let btn2 = document.querySelector("#end");
let start = null;

btn.addEventListener("click", function () {
  if (start !== null) return;
  start = setInterval(() => {
    let div = document.createElement("div");
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    let rotate = Math.floor(Math.random() * 360);

    div.style.height = "100px";
    div.style.width = "100px";
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    div.style.position = "absolute";
    div.style.left = x + "%";
    div.style.top = y + "%";
    div.style.rotate = rotate + 'deg';
    main.appendChild(div);
  }, 500);

  btn2.addEventListener("click", function () {
    clearInterval(start);
    start = null;
  });
});