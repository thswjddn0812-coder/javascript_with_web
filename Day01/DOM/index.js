//기본 : 5개
//참조: obj func arr +Document[html], Element[tag]

const btn = document.createElement("button");
btn.innerText = "월요일 ㅅㄱ";
btn.style.color = "white";
document.body.appendChild(btn);

const div = document.createElement("div");
div.innerText = "내일은 화요일이다";
document.body.appendChild(div);

const A = document.createElement("a");
A.innerText = "누르면 쿠팡 이동";
A.href = "https://www.coupang.com/";
document.body.appendChild(A);

const quiz1 = prompt("태그를와 내용을 입력하세요");
const element = document.createElement(quiz1.split(" ")[0]);
element.innerText = quiz1.split(" ")[1];
document.body.appendChild(element);
