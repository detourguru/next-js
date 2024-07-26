import { useState } from "react";
import Input from "./html/Input";
import Button from "./html/Button";
import CheckBox from "./html/CheckBox";

// 1. 할일을 담을 수 있는 상태값을 만들고, 그 안에 입력 요소의 값 추가
// 2. 할일을 담은 데이터를 가지고 반복문으로 할일(li tag) 출력
// 3. x 버튼을 누르면, 해당 할일을 삭제하는 기능을 추가한다
// 4. 할일을 담고있는 데이터가 개별적으로 체크 유무를 관리하고 있어야한다

type TTodoTypes = {
  id: number;
  text: string;
  isComplete: boolean;
};

const Todo = () => {
  const [todo, setTodo] = useState<TTodoTypes[]>([]);
  const [text, setText] = useState("");
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length <= 0) {
      alert("할 일을 입력해주세요");
      return;
    }
    setTodo((prev) => [
      ...prev,
      {
        text,
        id: Date.now(),
        isComplete: false,
      },
    ]);
    setText("");
  };
  const deleteTodo = (id: number) => {
    setTodo((todo) => todo.filter((task) => task.id !== id));
  };
  const toggleChkbox = (id: number) => {
    setTodo((todo) =>
      todo.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          {/* 등록 */}
          <form action="" className="grid gap-4" onSubmit={onSubmitHandler}>
            <div className="flex gap-2">
              <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Enter Todo List"
              />
              <Button
                type="submit"
                className="bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg"
              >
                Add
              </Button>
            </div>
          </form>
          {/* 목록 */}
          <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
            {todo.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between border border-[#4F4F4F] h-[44px] px-[15px] rounded-lg bg-[rgba(53,56,62,0.05)] select-none shrink-0"
              >
                <CheckBox
                  checked={task.isComplete}
                  onChange={() => toggleChkbox(task.id)}
                >
                  <span
                    className={`text-[#35383E] ${
                      task.isComplete ? "line-through" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </CheckBox>
                <Button
                  onClick={() => deleteTodo(task.id)}
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
