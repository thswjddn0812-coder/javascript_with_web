const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal", //방향:세로
  loop: true,// 오른쪽으로 계속 넘겨도 무한으로 나오는 것

  // If we need pagination
  pagination: {
    el: ".swiper-pagination", //아래 점점점 현재 위치
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next", //위 아래 넘길 수 있는 버튼
    prevEl: ".swiper-button-prev", 
  },

  // And if we need scrollbar
  scrollbar: { 
    el: ".swiper-scrollbar",//스크롤했을 때 나오는 바가 생성됨
  },
});
