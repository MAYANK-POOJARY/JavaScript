let btn = document.querySelector("button");
let h1 = document.querySelector("#percentage");
let inner = document.querySelector("#inner");
let growth = 0;

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";
  let num = Math.floor(50 + (Math.random() * 50));
  let start = setInterval(function () {
    growth++;
    inner.style.width = growth + "%";
    h1.innerHTML = growth + "%";
  }, num);

  setTimeout(function () {
    clearInterval(start);
    btn.style.opacity = 0.5;
    btn.innerHTML = "Downloaded";
    console.log(`The Download completed in ${num/10} seconds.`)
  }, num * 100);
});
