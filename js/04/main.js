// function User(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// User.prototype.introduce = function () {
//   console.log(
//     `안녕하세요~ 제 이름은 ${this.name}이고, 나이는 ${this.age}예요. 그리고 ${this.gender}입니다!`
//   );
// };

// const user1 = new User("Lucia", 29, "Female");
// user1.introduce(); // 실제 생성자 함수에 선언하지 않아도 프로퍼티에 들어있음
// console.dir(user1.__proto__); // prototype 객체를 가르킨다

// console.log(user1.__proto__ === User.prototype);

// function Shape(color) {
//   this.color = color;
//   this.getColor = function () {
//     return this.color;
//   };
// }

// function Rectangle(color, width, height) {
//   // Shape.call(this, color);
//   this.width = width;
//   this.height = height;
//   this.getArea = function () {
//     return this.width * this.height;
//   };
// }

// const shape1 = new Shape("red");
// console.log("color: ", shape1.color);
// console.log("get color: ", shape1.getColor());

// const shape2 = new Rectangle("blue", 20, 20);
// console.log(shape2);
// // console.log(shape2.getArea());

// class Shape {
//   constructor(color) {
//     this.color = color;
//   }
//   getColor() {
//     return `이 도형의 색상은 ${this.color}입니다.`;
//   }
// }

// const shape = new Shape("red");
// console.log(shape);

// class Rectangle extends Shape {
//   constructor(color, width, height) {
//     super(color); // 상속받은 상위 클래스의 color를 사용
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
// }

// const rectangle = new Rectangle("blue", 20, 20);
// console.log(rectangle);
// console.log(rectangle.getArea());

// class Car {
//   constructor(name, speed) {
//     this.#name = name;
//     this.speed = speed;
//   }
//   #name; // private로 지정

//   // setter: speed 속성을 설정할 때 호출되는 메서드
//   set speed(speed) {
//     if (speed < 0) {
//       // 예외처리
//       throw new Error("속도는 음수가 될 수 없습니다");
//     }
//     // 속도가 0 이상인 경우, 내부적으로 _speed라는 변수에 저장
//     // 여기서 speed를 그대로 사용하면 speed 속성을 설정하게 되어 재귀호출이 되어버리므로 다른 변수명을 사용한다
//     this._speed = speed;
//   }
//   // getter: speed 속성을 가져올 때 호출되는 메서드
//   get speed() {
//     return this._speed;
//   }

//   // get name() {
//   //   return this.#name;
//   // }
//   getSpeed() {
//     return `현재속도는 ${this.speed}입니다.`;
//   }
//   getCarName() {
//     return `제 차 이름은 ${this.#name}입니다.`;
//   }
// }

// const car = new Car("천송이", 11);
// console.log(car.getCarName(), car.getSpeed());

// // car.#name = "test"; private이라 변경할 수 없다는 에러 발생
// // car.name = "test"; // private인 상태에서 name getter를 이용해 외부에서 변경해주려고 해도 내부적으로 속성이 등록되어 에러는 나지 않으나 변경도 되지 않음

// function greeting(callback) {
//   console.log("welcome");
//   callback();
// }

// function goodbye() {
//   console.log("goodbye");
// }

// greeting(goodbye);

// // 비동기 콜백함수
// function task1(callback) {
//   setTimeout(() => {
//     console.log("task1 시작");
//     callback();
//   }, 1000);
// }

// task1(() => {
//   console.log("task2 시작"); // 콜백 함수: 수신된 데이터 처리
// });

// const promise = new Promise((resolve, reject) => {
//   // pending: 비동기 처리가 아직 수행되지 않은 상태
//   // fulfilled: 비동기 처리가 수행된 상태
//   // rejected: 비동기 처리가 실패한 상태

//   // 이 함수를 실행할 때 pending > fulfilled로 상태가 넘어간다
//   // promise의 result는 resolve 함수의 매개변수로 넘겨주는 값이 있을때 응답 결과로 들어간다
//   resolve("success");

//   // 예외처리를 위해 호출하는 함수
//   // 매개변수 내에 exception을 전달할 수도 있다
//   reject(new Error("fail!"));
// });

// promise
//   .then((value) => console.log(value)) // fulfilled 상태에 실행되는 함수. resolve에서 넘겨준 "success"가 넘어옴
//   .catch((error) => console.error(error)) // rejected 상태에서 실행되는 함수.
//   .finally(() => console.log("작업 완료")); // 어떤 상태에서든 마지막으로 실행되는 함수

// const promise = new Promise((resolve, reject) => {
//   const isSuccess = false;
//   setTimeout(() => {
//     isSuccess ? resolve("success") : reject(new Error("fail"));
//   }, 3000);
// });

// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("end"));

// const fetchNumber = () =>
//   new Promise((resolve, _) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });

// fetchNumber()
//   .then((num) => num * 2)
//   .then((num) => new Promise((resolve, reject) => resolve(num * 3))) // resolveLike를 통해 연속해서 처리가 가능하다
//   .then((num) => console.log(num)); // fetchNumber 함수의 resolve에서는 1을 넘겼으나 위의 연속된 처리로 인해 6을 반환함

// async
const delay = (ms) => {
  return new Promise((resolve) => {
    console.log("delayed");
    setTimeout(resolve, ms);
  });
};

async function task1() {
  await delay(1000);
  return "task1 started";
}

async function task2() {
  await delay(2000);
  return "task2 started";
}

async function task3() {
  await delay(1000);
  return "task3 started";
}

const startTasks = async () => {
  console.time();

  const task1Promise = task1();
  const task2Promise = task2();
  const task3Promise = task3();

  const result1 = await task1Promise;
  const result2 = await task2Promise;
  const result3 = await task3Promise;

  console.log(result1, result2, result3);

  console.timeEnd();
};

startTasks();
