// 기본자료형
const num: number = 10; // 숫자
const str: string = "hello"; // 문자
const bool: boolean = true; // 논리형
const nul: null = null;
const und: undefined = undefined;

const any: any = ""; // any => 타입 체크를 하지 않겠음

// 참조자료형
const obj: object = {}; // 객체
const arr: [] = []; // 배열
const func: Function = () => {}; // 함수

// 매개변수에서 받을 때 타입을 명시
const sum = (a: number, b: number): string => {
  return `${a + b}가 답이다.`;
};

// 변수에서 타입을 명시
const sum2: (a: number, b: number) => string = (a, b) => {
  return `${a + b}가 답이다.`;
};

console.log(sum(1, 2));

const number: Number = 10;
let string: String = "10";

string = new String("test");

console.log(number, string);

interface User {
  name: string;
  age: number;
  readonly gender: string;
  height: number;
}

const objtest: User = {
  name: "kim",
  age: 20,
  gender: "female",
  height: 168,
};

// 개발자가 정의한 새로운 타입
type TRainbowColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink";

const phoneColor: TRainbowColor = "yellow";

type TUseStatus = "Y" | "N";
let userYn: TUseStatus = "Y";

// 상속을 지원하지 않으나 인터섹션 타입을 통해 상속처럼 구현이 가능
type TColorAndStatus = TRainbowColor & TUseStatus;

// 타입을 미리 지정하지 않고 사용 시점에 타입을 정의해서 사용할 수 있는 문법
// 매개변수나 반환 값의 타입 경우의 수가 많아질수록 타입을 길게 명시해주어야 한다
// function firstElements(
//   elements: (number | string | boolean)[]
// ): number | string | boolean {
//   return elements[0];
// }

// console.log(firstElements([1, 2, 3]));
// console.log(firstElements(["a", "b", "c"]));
// console.log(firstElements([true, false]));
// generic을 활용하면 아래처럼 개선할 수 있다

function firstElements<T>(elements: T[]): T {
  return elements[0];
}

console.log(firstElements([1, 2, 3]));
console.log(firstElements(["a", "b", "c"]));
console.log(firstElements([true, false]));

type TCar<T> = {
  name: string;
  options: T;
};

const car1: TCar<string[]> = {
  name: "소나타",
  options: ["option1", "option2"],
};

const car2: TCar<string> = {
  name: "소나타",
  options: "option1",
};

// 타입 제약
// length 속성이 있는 것들만 제너릭을 받겠습니다.
const getLength = <T extends { length: number }>(item: T): void =>
  console.log(item);
getLength([1, 2, 3]);
getLength(["hello!"]); // 정상 출력
// getLength(true); iterable한 데이터가 아니므로 오류를 반환한다
