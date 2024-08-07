import { useRef, useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import InputBox from "./html/InputBox";

// todos에 담으려고 하는건 이런 속성의 obj임을 명시해줌
type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

const Todo = () => {
  // 1. 할일을 담을 수 있는 상태값을 만들고, 그 안에 입력 요소의 값 추가
  // 2. 할일을 담은 데이터를 가지고 반복문으로 할일(li tag) 출력
  // 3. x 버튼을 누르면, 해당 할일을 삭제하는 기능을 추가한다
  // 4. 할일을 담고있는 데이터가 개별적으로 체크 유무를 관리하고 있어야한다

  const [todos, setTodo] = useState<TTodo[]>([]);
  const [text, setText] = useState("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // submit으로 제출 방지
    setTodo((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        isCompleted: false,
      },
    ]);
    setText(""); // 문자열 초기화
  };

  const toggleTodo = (id: number) => {
    setTodo((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodo((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
          {/* <h1>{JSON.stringify(todos)}</h1> */}
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          {/* 등록 */}
          <form action="" className="grid gap-4" onSubmit={onSubmitHandler}>
            <div className="flex gap-2">
              <InputBox
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Enter Todo List"
              />
              <Button
                type="button"
                className="bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg"
              >
                Add
              </Button>
            </div>
          </form>
          {/* 목록 */}
          <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between border border-[#4F4F4F] h-[44px] px-[15px] rounded-lg bg-[rgba(53,56,62,0.05)] select-none shrink-0"
              >
                <Checkbox
                  id={todo.id.toString()}
                  onToggle={() => toggleTodo(todo.id)}
                >
                  <span
                    className={`text-[#35383E] ${
                      todo.isCompleted ? "line-through" : ""
                    }`}
                  >
                    {todo.text}
                  </span>
                </Checkbox>
                <Button
                  onClick={() => deleteTodo(todo.id)}
                  className="border border-[#4f4f4f] rounded w-[23px] h-[23px] flex justify-center items-center"
                >
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                      fill="#4F4F4F"
                    />
                    <path
                      d="M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Todo;
