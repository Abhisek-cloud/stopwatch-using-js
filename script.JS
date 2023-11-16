let time = document.getElementById("timer");

let start = document.getElementById("start");
let restart = document.getElementById("restart");
let stope = document.getElementById("stop");
let sec = document.getElementById("sec");
let min = document.getElementById("min");

start.addEventListener("click", (e) => {
  let h = 0;
  let m = 0;
  let s = 0;
  let startevent = setInterval(() => {
    s++;
    if (s >= 60) {
      s = 0;
      m++;
    } else if (m >= 59) {
      m = 0;
      h++;
    }
    
    h = h < 10 ? "0"+Number(h) : h;
    m = m < 10 ? "0" +Number(m)  : m;
    s = s < 10 ? "0" + s : s;

    console.log(typeof h);
    time.innerHTML = `${h}:${m}:${s}`;
  }, 1000);

  stope.addEventListener("click", () => {
    clearInterval(startevent);
  });

  restart.addEventListener("click", () => {
    s = 0;
    m = 0;
    h = 0;
    time.innerHTML = `${"0"
  +h}:${"0"+m}:${"0"+s}</span>`;
  });
});
