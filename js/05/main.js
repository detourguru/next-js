// // 선택자로 문서 객체 찾을 때
// // const getH1 = document.getElementById("h1"); // 과거 더 많이 사용하던 방식. 과거에는 상대적으로 더 가벼웠으나 요즘은 유의미한 차이가 없다
// const h1 = document.querySelector("h1"); // 요즘은 이 방식을 더 많이 쓴다
// const allH1 = document.querySelectorAll("h1");
// const specificH1 = document.querySelector(".specific");

// // innerHTML과 innerText로 컨텐츠 변경
// specificH1.innerText = "<i>I modified you!</i>"; // text 추가
// specificH1.innerHTML = "<i>I modified you!</i>"; // html로 추가

// console.log(h1);
// console.log(allH1); // 배열로 반환
// console.log(specificH1);

// // 스타일을 변경하기
// h1.style.color = "blue";
// h1.style.background = "black";
// h1.style.fontSize = "80px"; // css에서 -으로 구분되던 속성은 카멜케이스로 찾을 수 있다

// // 클래스 추가하기
// specificH1.classList.add("active");

// // 클래스 삭제하기
// specificH1.classList.remove("specific");

// // 클래스 토글하기
// specificH1.classList.toggle("toggle"); // toggle class 없었기 때문에 추가됨
// specificH1.classList.add("toggle"); // 임의로 추가해줌
// specificH1.classList.toggle("toggle"); // toggle class 있어서 삭제됨

// // input value 가져오기
// setTimeout(() => {
//   const inputEl = document.querySelector("input");
//   console.log(inputEl.value);
// }, 3000);

// // 이벤트 타겟
// const inputEl = document.querySelector("input");

// // 이벤트 타입 & 이벤트 핸들러
// inputEl.addEventListener("keydown", function (event) {
//   specificH1.innerHTML = inputEl.value;
//   if (event.key == "Enter") {
//     h1.innerHTML = inputEl.value;
//   }
// });

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   h1.innerHTML = inputEl.value;
// });

const h1 = document.querySelector("h1");
h1.style.color = "blue";
h1.style.background = "black";
h1.addEventListener("mouseover", () => {
  h1.style.color = "red";
  h1.style.background = "green";
});
h1.addEventListener("mouseout", () => {
  h1.style.color = "blue";
  h1.style.background = "black";
});
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

increase.addEventListener("click", () => {
  if (h1.innerHTML < 10) h1.innerHTML++;
  else {
    alert("황정식 바보!");
  }
});

decrease.addEventListener("click", () => {
  if (h1.innerHTML > 0) h1.innerHTML--;
});
