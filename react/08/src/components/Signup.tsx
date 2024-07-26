import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import InputBox from "./html/InputBox";

const App = () => {
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] bg-white py-10 px-[25px] font-[inter] rounded-lg">
          <h1 className="text-xl font-bold text-[#4f4f4f] mb-[10px]">
            Sign Into App
          </h1>
          <p className="text-sm text-[#4f4f4f] mb-5">
            Please enter your details to continue.
          </p>
          <form action="" className="flex flex-col gap-4">
            <InputBox type="text" placeholder="Enter Your Name" />
            <InputBox type="email" placeholder="someone@example.com" />
            <InputBox type="password" placeholder="Enter Password" />
            <small className="place-content-end underline">비밀번호 확인</small>
            <Checkbox>I agree with terms and policies.</Checkbox>
            <div className="flex flex-col gap-4 mt-4">
              <Button className="bg-[#4f4f4f] w-full">Sign in</Button>
              <Button className="bg-white ring-1 ring-[#4f4f4f] text-[#4f4f4f] w-full">
                Go To Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default App;
