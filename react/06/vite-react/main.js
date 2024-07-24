// 비구조화 할당
const printHello = ({ name: uu, age }) => `${uu}은 ${age}세 이다.`;
console.log(printHello({ name: "채연", age: 29 }));

const {
  animalName: an,
  animalType,
  ...rest
} = {
  animalName: "황도",
  animalType: "고양이",
  animalAge: 2,
  animalGender: "male",
};

console.log(rest);

// 얕은 복사 (shallow copy)
const arr1 = [10, 20, 30];
const arr2 = arr1;

console.log(arr1 === arr2); // 같은 주소 값을 가지므로 true를 반환
arr1.push(40); // arr1에 요소 추가
console.log(arr2); // arr2에도 동일한 값이 추가된다

// 깊은 복사 (deep copy)
const arr3 = [10, 20, 30];
const arr4 = [...arr3]; // sperad 연산자를 사용해 배열 안의 요소를 가져온다
arr3.push(40);
console.log(arr4);

const user1 = { name: "kim", age: 20 };
const user2 = user1;

console.log(user1 === user2);

const obj2 = { name: "test2", age: 20 };

console.log({ ...obj2, ...{ gender: "male" } });
