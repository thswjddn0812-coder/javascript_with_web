// const [tag, contents] = prompt("태그를와 내용을 입력하세요").split(" ");
// const element = document.createElement(tag);
// element.innerText = contents;
// document.body.appendChild(element);

const contents = prompt("내용 입력").split(" ");

contents.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  document.body.appendChild(btn);
});
