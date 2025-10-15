// const btn = document.createElement("button");
// btn.innerText = "테스트";
// btn.addEventListener("click", () => {
//   alert("손정우");
// });
// document.body.appendChild(btn);

//div 태그 만들고
//내용은 점메추 만들고
// 클릭하면 콘솔로그로 오늘의 점심메뉴는 마라탕입니다.!

// const Div = document.createElement("div");
// Div.innerText = "점메추";
// Div.addEventListener("click", () => {
//   console.log("오늘의 점심메뉴는 마라탕입니다!");
// });
// document.body.appendChild(Div);

// //버튼 태그 만들고
// //안에 콜라 내용 넣고
// //클릭하면 콜라가 사이다로 변하도록하기

// const btn_1 = document.createElement("button");
// btn_1.innerText = "콜라";
// btn_1.addEventListener("click", () => {
//   btn_1.innerText = "사이다";
// });
// document.body.appendChild(btn_1);

// //버튼 만들고
// //😶<->

// const btn_2 = document.createElement("button");
// btn_2.innerText = "😶";
// btn_2.addEventListener("click", () => {
//   btn_2.innerText = "😍";
//   if (btn_2 == "😶") {
//     btn_2.innerText = "😍";
//   } else {
//     btn_2.innerText = "😶";
//   }
// });
// Div.appendChild(btn_2);

const Btn = document.createElement("button");
Btn.style.backgroundColor = "white";
Btn.addEventListener("click", () => {
  Btn.style.backgroundColor == "white"
    ? (Btn.style.backgroundColor = "blue")
    : (Btn.style.backgroundColor = "white");
});
Btn.innerText = "✅";
document.body.appendChild(Btn);
