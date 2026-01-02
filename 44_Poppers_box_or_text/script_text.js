

// code for adding sentences instead of divs
let main = document.querySelector("main");
let btn = document.querySelector("#start");
let btn2 = document.querySelector("#end");
let arr = [
  "I Love JS.",
  "Learning from Cohort 2.0.",
  "DSA is boring",
  "blah blah blah ....",
];
let start = null;

btn.addEventListener("click", function () {
  if (start !== null) return;
  start = setInterval(function () {
    let num = Math.floor(Math.random() * arr.length);
    let scale = Math.random() * 3;
    let rotate = Math.floor(Math.random() * 360);
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let h1 = document.createElement("h1");
    h1.innerHTML = arr[num];
    h1.style.fontSize = "20px";
    h1.style.rotate = rotate + "deg";
    h1.style.color = "white";
    h1.style.position = "absolute";
    h1.style.left = x + "%";
    h1.style.top = y + "%";
    h1.style.scale = scale;
    main.appendChild(h1);
  }, 500);

  btn2.addEventListener('click',function(){
    clearInterval(start);
    start = null;
  })
});
