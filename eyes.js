const balls = document.getElementsByClassName("ball");

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";
  for (let eye = 0; eye < balls.length + 1; eye++) {
    balls[eye].style.left = x;
    balls[eye].style.top = y;
    balls[eye].transform = "translate(-" + x + ",-" + y + ")";
  }
};
