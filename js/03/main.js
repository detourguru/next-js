// function add(...args) {
//   let result = 0;
//   for (const i of args) {
//     result += i;
//   }

//   return result;
// }

// function printNum(number) {
//   console.log(`${number}가 출력되었습니다.`);
// }

// printNum(add(10, 230));

// function depth0() {
//   return function () {
//     return function () {
//       return {
//         name: "김채연",
//         grade: "vip",
//       };
//     };
//   };
// }

// const depth1 = depth0();
// const depth2 = depth1();

// console.log(depth2());
// console.log(depth0()()());

// function declareFunc(a, b) {
//   return console.log(`declare function: ${a + b}`);
// }

// const arrowFunc = (a, b) => {
//   return console.log(`arrow function: ${a + b}`);
// };

// const arrowFunc2 = (a, b) => console.log(`arrow function2: ${a + b}`);
// const arrowFunc3 = (a, b) => ({
//   param1: a,
//   param2: b,
// });

// const arrowFunc4 = (a, b) => [a, b];

// console.log(arrowFunc4(1, 2));

// console.dir(this);

// this를 호출한 최상위 객체인 윈도우 객체가 출력됨
// console.dir(this);

// // 전역함수이므로 최상위 객체인 윈도우 객체가 출력됨
// const member = () => {
//   console.log(this);
// };

// // 메서드에서 출력하고 있으므로 자신을 호출한 객체인 membership 객체가 출력됨
// const membership = {
//   name: "디투",
//   // 객체 내의 함수는 메소드라고 부름
//   joined: function () {
//     console.log(this);
//   },
//   // 화살표함수 안의 this는 밖에서 상속받은 것이므로 this를 호출하면 최상위객체인 window가 출력됨
//   age: () => {
//     console.log(this);
//   },
// };

// const membership2 = {
//   name: "디투",
//   // 객체 내의 함수는 메소드라고 부름
//   joined: function () {
//     console.log(this);
//   }.bind({ test: "메롱" }), // bind를 사용해 내가 원하는 객체로 this를 지정할 수 있다;,
// };

// // 전역변수에 담고 호출했으므로 최상위 객체인 window가 출력됨
// // bind를 사용했다면 bind로 지정한 객체를 출력하게 된다
// const joined = membership2.joined;
// joined();

// console.log(test);
// var test = "test"; // var 키워드로 선언 시에는 생성 단계에서 undefined 초기화 값이 지정됨. 따라서 실행 시 undefined가 출력된다.
// // let test = "test2"; // let, const 등의 키워드로 선언시에는 초기화 값이 지정되지 않음. 따라서 실행시 에러가 발생한다.

// test(); // 에러 발생 없이 실행됨
// function test() {
//   return true;
// }

// test2(); // 에러남
// const test2 = () => true;

// function outer() {
//   let cnt = 0;
//   return function inner() {
//     cnt++;
//     console.log(cnt);
//   };
// }

// const counter = outer();
// counter();
// counter();
// counter();

// // object
// const obj = {};
// obj.color = "yellow"; // 동적으로 프로퍼티 생성
// delete obj.color; // 삭제

// console.log(obj.color); // 존재하지 않는 프로퍼티 조회시 undefined 반환

function User(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

User.prototype.introduce = function () {
  console.log(
    `안녕하세요~ 제 이름은 ${this.name}이고, 나이는 ${this.age}예요. 그리고 ${this.gender}입니다!`
  );
};

const user1 = new User("Lucia", 29, "Female"); // 객체 호출
user1.introduce();
console.dir(user1.__proto__);
// console.dir(user1.__proto__ === User.prototype);
const user2 = new User("John", 23, "male"); // 객체 호출
const user3 = new User("Sik", 27, "male"); // 객체 호출
