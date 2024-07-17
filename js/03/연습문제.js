// Q1. [연습문제 - 1부터 9까지 출력하기]
for (let i = 1; i < 10; i++) {
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

  // 간결한 if문은 삼항연산자를 활용 가능!
  //   console.log(i % 2 == 0 ? `${i} 짝수` : `${i} 홀수`);
}

// Q4. [연습문제 - 암스트롱 수 구하기]
let armstrong = 0;
for (let i = 100; i <= 999; i++) {
  for (let num of i.toString()) {
    // ! 내장 함수를 가져다 쓸 때 상당한 비용 소모 되므로 적절하지 않음
    armstrong += num ** 3;
  }

  // 153, 370, 371, 407
  if (armstrong === i) console.log(armstrong);

  armstrong = 0;
}

// 각 자리수 구하는 공식을 활용한 코드
// ex. 456
// 일의 자리: 456 % 10 = 6
// 십의 자리: (456 - 6) / 10 % 10 = 5
// 백의 자리: 456 - 6 - (5 * 10) = 400 / 100 = 4

for (let i = 100; i <= 999; i++) {
  const digit1 = i % 10;
  const digit10 = ((i - digit1) / 10) % 10;
  const digit100 = (i - digit1 - digit10 * 10) / 100;

  // ** 제곱
  if (i === digit1 ** 3 + digit10 ** 3 + digit100 ** 3) console.log(i);
}

// 다중 forloop를 이용해서 푸는 코드
for (let i = 1; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = 0; k <= 9; k++) {
      const result = i ** 3 + j ** 3 + k ** 3;
      const origin = i * 100 + j * 10 + k;

      if (result === origin) console.log(origin);
    }
  }
}

// return 키워드 없이 화살표 함수로 변환
function membershipCard() {
  return function () {
    return function () {
      return {
        name: "수코딩 온라인 사이트",
        grade: "basic",
      };
    };
  };
}

const membershipCard2 = () => () => () => ({
  name: "수코딩 온라인 사이트",
  grade: "basic",
});

// 함수

// Q1
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
const sum = (...args) => {
  let result = 0;
  for (const i of args) {
    result += i;
  }
  return result;
};
console.log(sum(1, 2, 3));

// Q2
//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.
//구현 방법은 자율입니다.
const calculater = (condition, num1, num2) => {
  if (condition === "sum") return num1 + num2;
  else if (condition === "diff") return num1 - num2;
  else if (condition === "multiply") return num1 * num2;
  else if (condition === "divided") return num1 / num2;
  else
    return "그런 계산은 할 수 없습니다.\nsum, diff, multiply, divided 중 하나를 입력하세요.";
};
// sum, diff, multiply, divided
console.log(calculater("divided", 1, 2));

// Q3
//숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
//함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
const isEven = (num) => (num % 2 === 0 ? true : false);
console.log(isEven(7));

// Q4
//양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
//함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.

// !0 === 1; 을 만족시키지 못하므로 틀린 코드이다
const factorial1 = (int) => {
  let result = 1;
  for (let i = 1; i <= int; i++) {
    // 기본적으로 팩토리얼은 주어진 수에서 역순으로 곱하는 계산 방식이므로 적절하지 못함
    result *= i;
  }
  return result;
};
console.log(factorial1(0));

// 정답 예시 1
const factorial2 = (int) => {
  let sum = 1;
  for (let i = int; i > 0; i--) {
    sum *= i;
  }
  return sum;
};
console.log(factorial2(5));

// 정답 예시 2: 재귀함수를 사용한 함수
const factorial3 = (int) => {
  if (int === 0 || int === 1)
    return 1; // 이 조건에선 자기자신을 호출하지 않도록 탈출
  else return int * factorial3(int - 1);
};
console.log(factorial3(5));

// Q5
//삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
//함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.

// 밑변 × 높이 / 2
const triangleArea = (bottom, height) => (bottom * height) / 2;
console.log(triangleArea(10, 5));

// 문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.

const countChar = (str) => {
  let result = "";
  let counter = 0;
  for (let char of str) {
    if (result === "") {
      counter++;
      result = char;
    } else if (char === result) {
      counter++;
    } else if (char != result) {
      counter = 1;
      result = char;
    }
  }
};
countChar("aabbaa");
