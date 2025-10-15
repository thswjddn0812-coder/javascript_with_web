const time = document.querySelector("#time");
setInterval(() => {
  const a = new Date();
  const locale = a.toLocaleString();
  time.innerText = locale;
}, 1000);
