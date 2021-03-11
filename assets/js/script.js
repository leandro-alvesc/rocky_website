const toggleMenu = () => {
  let x = document.getElementById("nav-top");
  if (x.className === "nav-top text-uppercase") {
    x.className = "nav-top menu text-uppercase";
  } else {
    x.className = "nav-top text-uppercase";
  }

  let y = document.getElementById("cont-menu");
  if (y.className === "cont-menu") {
    y.className = "cont-menu-open";
    y.style.opacity = 0;
    setTimeout(() => {
      y.style.opacity = 1;
    }, 10);
  } else {
    y.style.opacity = 1;
    y.className = "cont-menu";
  }
};
