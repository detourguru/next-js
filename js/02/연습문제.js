// 1. 변수 타입 확인
//     1. 다음 변수들의 타입을 확인하여 콘솔에 출력하세요.
let num = 42;
let name = "John";
let isTrue = true;
let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "orange"];

console.log(
  typeof num,
  typeof name,
  typeof isTrue,
  typeof person,
  typeof fruits
);

// 2. 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요.
let length = 16; // number
let lastName = "Brown"; // string
let score = [10, 20]; // object
let x = {
  firstName: "Nick",
  lastName: "Doe",
}; // object

// 1. 두 숫자 10과 5를 변수 `a`와 `b`에 할당하세요.
const a = 10;
const b = 5;

// 2. 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산을 수행하고 결과를 각각의 변수에 저장하세요.
const plus = a + b;
const minus = a - b;
const multiply = a * b;
const divided = a / b;
const remain = a % b;

// 3. 각 연산의 결과를 콘솔에 출력하세요.
console.log(plus, minus, multiply, divided, remain);

// 1. 변수 `y`에 숫자 7을 할당하세요.
let y = 7;
// 2. 후위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가하기 전과 후의 값을 각각 출력하세요.
console.log("후위증가: " + y);
console.log("후위증가: " + y++ + "\n");
// 3. 후위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소하기 전과 후의 값을 각각 출력하세요.
console.log("후위감소: " + y);
console.log("후위감소: " + y-- + "\n");
// 4. 전위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가한 값을 출력하세요.
console.log("전위증가: " + y);
console.log("전위증가: " + ++y + "\n");
// 5. 전위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소한 값을 출력하세요.
console.log("전위감소: " + y);
console.log("전위감소: " + --y + "\n");

// - 변수 `x`에 숫자 20을 할당하세요.
let x = 20;
// - 복합 대입 연산자를 사용하여 `x`에 10을 더하고, 그 결과를 출력하세요.
x += 10;
console.log(x);
// - 복합 대입 연산자를 사용하여 `x`에서 5를 빼고, 그 결과를 출력하세요.
x -= 5;
console.log(x);
// - 복합 대입 연산자를 사용하여 `x`를 2로 나누고, 그 결과를 출력하세요.
x /= 2;
console.log(x);
// - 복합 대입 연산자를 사용하여 `x`를 3으로 곱하고, 그 결과를 출력하세요.
x *= 3;
console.log(x);

// - 두 변수 `age1`과 `age2`에 각각 25와 30을 할당하세요.
// - `age1`이 `age2`보다 큰지 비교하여 결과를 콘솔에 출력하세요.
// - `age1`과 `age2`가 같은지 비교하여 결과를 콘솔에 출력하세요.

const age1 = 25;
const age2 = 30;

console.log(age1 > age2);
console.log(age1 === age2);

const budget = 1000;
const price = 2000;

const result = budget > price ? "물건을 구매하겠습니까?" : "돈이 부족합니다";
console.log(result); // "돈이 부족합니다"

// 삼항연산자

// 1. 숫자비교
//     1. 변수 `num`에 임의의 숫자를 할당하세요.
//     2. `num`이 0보다 큰지, 0인지, 0보다 작은지 삼항 연산자를 사용하여 각각 "Positive", "Zero", "Negative"를 출력하세요.

const num = -1;
console.log(num === 0 ? "Zero" : num > 0 ? "Positive" : "Negative");

// 2. 최댓값 찾기
//     - 세 변수 `a`, `b`, `c`에 임의의 숫자를 할당하세요.
//     - 삼항 연산자를 사용하여 `a`, `b`, `c` 중 가장 큰 숫자를 찾고, 그 결과를 출력하세요.
const a = 12;
const b = 5;
const c = 3;

let result;
// console.log(result = a);
console.log((a > b ? (result = a) : (result = b)) > c ? result : c);

// 3. 짝수 홀수 확인
// - 변수 `number`에 임의의 숫자를 할당하세요.
// - 삼항 연산자를 사용하여 `number`가 짝수인지 홀수인지 확인하고, "Even" 또는 "Odd"를 출력하세요.
const number = 12;
// 내 정답:
console.log(number % 2 === 0 ? "Even" : "Odd");
// 선생님 정답: 이미 number % 2 가 0 이므로 false와 동일하게 제3피연산자가 표시되므로 굳이 일치연산자로 비교할 필요 없음
console.log(number % 2 ? "Odd" : "Even");
// 4. 로그인 확인

// - 변수 `isLoggedIn`에 `true` 또는 `false`를 할당하세요.
// - 삼항 연산자를 사용하여 `isLoggedIn`이 `true`이면 "Welcome", `false`이면 "Please log in"을 출력하세요.

const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome" : "Please log in");

// 1. 성인 확인
// - 변수 `age`에 임의의 나이를 할당하세요.
// - 삼항 연산자를 사용하여 `age`가 18 이상이면 "Adult", 그렇지 않으면 "Minor"를 출력하세요.

const age = 18;
console.log(age >= 18 ? "Adult" : "Minor");

// 1. 논리 연산자 기본
// - 변수 `a`와 `b`에 각각 `true`와 `false`를 할당하세요.
const a = true;
const b = false;
// - `a`와 `b`의 논리 AND 연산 결과를 출력하세요.
console.log(a && b);
// - `a`와 `b`의 논리 OR 연산 결과를 출력하세요.
console.log(a || b);
// - `a`의 논리 NOT 연산 결과를 출력하세요.
console.log(!a);
// 1. 여러 조건 결합
// - 변수 `x`, `y`, `z`에 각각 임의의 숫자를 할당하세요.
const x = 10;
const y = 20;
const z = 30;
// - `x`가 10보다 크고 `y`가 5보다 작은지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(x > 10 && y < 5);
// - `x`가 10보다 크거나 `z`가 3보다 큰지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(x > 10 || z > 3);
// - `y`가 0이 아닌지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(y !== 0);
// 3. 사용자 로그인 및 권한 확인

// - 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
const isLoggedIn = true;
const isAdmin = false;
// - 사용자가 로그인했는지 확인하고, 로그인했다면 "Welcome"을, 그렇지 않다면 "Please log in"을 출력하세요.
console.log(isLoggedIn ? "Welcome" : "Please log in");
// - 사용자가 관리자 권한을 가지고 있는지 확인하고, 관리자라면 "Admin access granted"를, 그렇지 않다면 "Admin access denied"를 출력하세요.
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
// - 로그인 여부와 관리자 권한을 모두 확인하여, 로그인하고 관리자라면 "Full access granted"를, 그렇지 않다면 "Restricted access"를 출력하세요.
console.log(
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
);
// 4. 값의 존재 확인

// - 변수 `value1`과 `value2`에 각각 임의의 값을 할당하세요. (예: 숫자, 문자열, `null`, `undefined`)
const value1 = 1;
const value2 = null;
// - 두 변수 중 하나라도 값이 존재하는지 확인하는 조건을 작성하고, 결과를 출력하세요.
// console.log(!value1 === false || !value2 === false);
console.log(!!value1 || !!value2);
// - 두 변수 모두 값이 존재하지 않는지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(!value1 && !value2);

// 1. 범위 확인
// - 변수 `num`에 임의의 숫자를 할당하세요.
const num = 101;
// - `num`이 0 이상 100 이하인지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(0 <= num && num <= 100);
// - `num`이 0 미만이거나 100 초과인지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(0 > num || num > 100);

// Q1. 여러개의 데이터를 하나로 묶어서 표현하고 인덱스 번호로 접근하는 자바스크립트 자료형은?
// ==> 배열

// Q2. 아래의 코드에서 잘못된 부분을 수정하시오
// ==> 잘못된 부분이 없음

// Q3. 다음 중 산술 연산자가 아닌 것을 고르세요.
// ==> = 대입연산자

// Q4. 다음중 연산자와 이름이 잘못 적어진 것을 고르세요.
// ==> % 나머지 연산자

// Q5. 아래의 코드의 실행 결과를 예측하세요.
// 축하합니다. 만렙입니다.

// Q7. 아래의 코드와 같은 코드를 고르세요
// ==> score += 10;

// Q8. 아래의 실행 결과를 고르세요
// 자바스크립트 연산 우선순위도 곱셈 우선이다
// ==> 30

// Q9. 삼항 연산자 활용

// 1. 변수 **`num`**을 선언하고 어떤 숫자를 할당하세요.
const num = 10;
// 2. **`num`**이 짝수인지 홀수인지 판별하는 삼항 연산자를 사용하여 결과를 **`isEven`** 변수에 저장하고 콘솔에 출력하세요.
let isEven = num % 2 ? "Odd" : "Even";
console.log(isEven);

const age = 10;
const msg = `나는 ${age}살 입니다.`;

console.log(msg);
console.log("A" - "B");

// switch 문 if문으로 바꾸기
const area = "경기도";
let shippingFee;
if (area === "서울") shippingFee = 3000;
else if (area === "부산") shippingFee = 5000;
else if (area === "경기도") shippingFee = 4000;
else if (area === "광주") shippingFee = 3500;
else shippingFee = 10000;

console.log(`area is ${area} and shipping fee is ${shippingFee}`);
const area = "서울";
let shippingFee;

switch (area) {
  case "서울":
    shippingFee = 3000;
    break;
  case "부산":
    shippingFee = 5000;
    break;
  case "경기도":
    shippingFee = 4000;
    break;
  case "광주":
    shippingFee = 3500;
    break; // break가 없으면 조건에 상관없이 break를 만날때까지 코드를 진전시킨다
  default:
    shippingFee = 10000;
    break;
}
console.log(shippingFee);

// 1. [연습문제 - 학점 계산기]

/*
[연습문제 - 학점 계산기]

학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.back

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
*/

const score = 80;
let result;
if (score >= 90) result = "A";
else if (score >= 80) result = "B";
else if (score >= 70) result = "C";
else if (score >= 60) result = "D";
else result = "F";
console.log(result);

// 1. 짝수와 홀수 판별
// - 변수 `num`에 임의의 숫자를 할당하세요.
// - `num`이 짝수인지 홀수인지 확인하고, 짝수면 "Even", 홀수면 "Odd"를 출력하세요.
const num = 20;

if (num % 2 === 0) console.log("Even");
else console.log("Odd");

// 3. 로그인 확인 및 권한 부여

// - 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
// - 사용자가 로그인했는지 확인하고, 로그인하지 않았다면 "Please log in"을 출력하세요.
// - 사용자가 로그인했지만 관리자가 아닌 경우 "Access denied"를 출력하세요.
// - 사용자가 로그인하고 관리자일 경우 "Welcome, admin!"을 출력하세요.

const isLoggedIn = false;
const isAdmin = true;
let msg;

if (!isLoggedIn) {
  msg = "please log in";
} else {
  if (isAdmin) msg = "Welcome, admin";
  else msg = "Access denied";
}

console.log(msg);
// 4. 숫자 크기 비교

// - 변수 `a`와 `b`에 임의의 숫자를 할당하세요.
// - `a`와 `b`의 크기를 비교하고, `a`가 크면 "a is greater", `b`가 크면 "b is greater", 두 값이 같으면 "a and b are equal"을 출력하세요.

const a = 2;
const b = 23;
let msg;

if (a > b) msg = "a is greater";
else if (a < b) msg = "b is greater";
else if (a === b) msg = "a and b are equal";

console.log(msg);

// 1.  월별 계절 판별
//     1. 변수 `month`에 1에서 12 사이의 숫자를 할당하세요.
//     2. `month`에 따라 해당하는 계절을 출력하세요:
//         - 12, 1, 2: "Winter"
//         - 3, 4, 5: "Spring"
//         - 6, 7, 8: "Summer"
//         - 9, 10, 11: "Fall"

const month = 12;

if (month === 12 || month === 1 || month === 2) console.log("winter");
else if (month === 3 || month === 4 || month === 5) console.log("Spring");
else if (month === 6 || month === 7 || month === 8) console.log("Summer");
else console.log("Fall");

const arr = ["banana", "apple", "orange"];
const obj = { name: "철수", age: 20 };

for (let idx in arr) {
  // 배열이나 객체의 길이만큼 반복한다
  console.log(arr[idx]);
}

for (let key in obj) {
  // 배열이나 객체의 길이만큼 반복한다
  console.log(obj[key]);
}

let arr = ["banana", "apple", "orange"];
let obj = { name: "철수", age: 20 };

for (let index of arr) {
  console.log(index);
}

// Q1. [연습문제 - 1부터 9까지 출력하기]
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Q2. [연습문제 - 음수 걸러내기]
let numArr = [10, -10, 20, -30, 40];
let result = 0;

for (let i of numArr) {
  if (i > 0) {
    result += i;
  }
}
console.log(result);

// Q3. [연습문제 - 홀짝 구분하기]
for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(`${i} 짝수`);
  } else {
    console.log(`${i} 홀수`);
  }
}

// Q4. [연습문제 - 암스트롱 수 구하기]
let armstrong = 0;
for (let i = 100; i <= 999; i++) {
  for (let num of i.toString()) {
    armstrong += num * num * num;
  }

  if (armstrong === i) {
    // 153, 370, 371, 407
    console.log(armstrong);
  }
  armstrong = 0;
}

// Q5. 문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.
function zipNum

// Q6. 다음 구구단을 출력하는 코드를 반복문을 사용해서 출력하도록 변경해주세요.
function gugudan3() {
  for (let i = 1; i < 10; i++) {
    console.log(`3*${i}=${i * 3}`);
  }
}
gugudan3();

const gugudan4 = function gugudan4() {
  for (let i = 1; i < 10; i++) {
    console.log(`4*${i}=${i * 4}`);
  }
};
gugudan4();

const gugudan5 = function () {
  for (let i = 1; i < 10; i++) {
    console.log(`5*${i}=${i * 5}`);
  }
};
gugudan5();
