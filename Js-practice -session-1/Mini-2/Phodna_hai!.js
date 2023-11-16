const btn = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

document.querySelector(".centre").addEventListener("mousemove", throttleFunction((dets) => {
  const div = document.createElement("div");
  div.classList.add('imgdiv');
  div.style.left = dets.clientX + 'px';
  div.style.top = dets.clientY + 'px';
  var photu = document.createElement("img");
  photu.setAttribute("src", "https://images.unsplash.com/photo-1694240347927-0c6165b7a5e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60")
  div.appendChild(photu);
  gsap.to(photu, {
    y: "0%",
    ease: "power1.inOut",
    duration: 0.1
  })
  gsap.to(photu, {
    y: "100%",
    delay: .6,
    ease: "power1.inOut",
  })
  document.body.appendChild(div)
  setTimeout(function () {
    div.remove();
  }, 1500)
}, 500));
