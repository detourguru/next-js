const students = [
  { name: "Alice", age: 21, gender: "male", height: 170 },
  { name: "Bob", age: 19, gender: "male", height: 165 },
  { name: "Charlie", age: 20, gender: "male", height: 175 },
  { name: "David", age: 22, gender: "male", height: 180 },
  { name: "Eve", age: 17, gender: "female", height: 160 },
  { name: "Frank", age: 18, gender: "male", height: 175 },
  { name: "Grace", age: 21, gender: "female", height: 165 },
  { name: "Henry", age: 19, gender: "male", height: 170 },
  { name: "Ivy", age: 20, gender: "female", height: 155 },
  { name: "Jack", age: 22, gender: "male", height: 185 },
];

// 1. 키가 185인 학생 찾기
{
  const findHeight185 = (students) => students.height === 185;
  // David
  console.log("키가 185인 학생 찾기: ", students.find(findHeight185));
}

//2. 나이가 20살 이상인 학생들 찾기
{
  const filterOver20 = (students) => students.age >= 20;
  // [Alice, Charlie, David, Grace, Ivy, Jack]
  console.log(
    "나이가 20살 이상인 학생들 찾기: ",
    students.filter(filterOver20)
  );
}

//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
{
  const filterLess165 = (students) => students.height >= 165;
  // true
  console.log(
    "키가 165 이하인 학생들이 있는지 찾기: ",
    students.some(filterLess165)
  );
}

//4. 학생들이 모두 20살 이상인지 확인해서 true, false 반환하기
{
  const checkIfAllOver20 = (students) => students.age >= 20;

  // false
  console.log(
    "학생들이 모두 20살 이상인지 확인하기: ",
    students.every(checkIfAllOver20)
  );
}

//5. 학생들의 평균 연령 구하기
{
  const getTotalAge = (prev, cur) => prev + cur.age;

  // 19.9
  console.log(
    "학생들의 평균 연령 구하기: ",
    students.reduce(getTotalAge, 0) / students.length
  );
}

//6. 남학생들의 평균 연령 구하기
{
  const checkIfMale = (students) => students.gender === "male";
  const maleArr = students.filter(checkIfMale);
  const getMaleTotalAge = (prev, cur) => prev + cur.age;
  // 20.142857142857142
  console.log(
    "남학생들의 평균 연령 구하기: ",
    maleArr.reduce(getMaleTotalAge, 0) / maleArr.length
  );
}

{
  //7. 여학생들만 따로 추출해서 새로운 배열 만들기
  const checkIfFemale = (students) => students.gender === "female";
  const femaleArr = students.filter(checkIfFemale);
  // [Eve, Grace, Ivy]
  console.log("여학생들만 따로 추출해서 새로운 배열 만들기: ", femaleArr);

  //8. 여학생들 중 나이가 가장 어린 학생 찾기
  const compareNumbers = (a, b) => a.age - b.age;

  // Eve
  console.log(
    "여학생들 중 가장 어린 사람 찾기: ",
    femaleArr.sort(compareNumbers).shift()
  );
}

// 연습문제

// [문제]
// 매개변수로 숫자를 전달하면 그 숫자의 역순을 되돌려주는
// 함수를 만들어주세요.

// ex) 32125 -> 52123
//     15231 -> 13251

function reverse_to_number(number) {
  return number.toString().split("").reverse().join("");
}

let a = reverse_to_number(32125);
console.log(a); // 52123

let b = reverse_to_number(13251);
console.log(b); // 15231

/*
  [가장 긴 단어를 출력하기]

  매개변수로 전달된 문장에서 가장 긴 단어를 출력해주세요.

*/

function findLongStr(str) {
  const arr = str.split(" ");
  let result = [];

  // 순회를 돌며 keyword와 그 길이를 배열로 저장
  arr.forEach((element) => {
    result.push({ keyword: element, length: element.length });
  });

  // 배열의 length를 오름차순으로 정렬 후 가장 마지막 값 (큰 값)
  return result.sort((prev, cur) => prev.length - cur.length).pop().keyword;
}

let result = findLongStr("we are the champion");
console.log(result); // champion

let result2 = findLongStr("i`m fine thank you, and you?");
console.log(result2); // thank
