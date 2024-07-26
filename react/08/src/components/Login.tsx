import { useRef, useState } from "react";
import InputBox from "./html/InputBox";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
const Login = () => {
  const [type, setType] = useState("Sign"); // Sign or Login
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const emailEl = useRef<HTMLInputElement>(null);
  const nameEl = useRef<HTMLInputElement>(null);
  const passwordEl = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameEl.current);
    const loginValid = email.trim() === "" || password.trim() === "" || !agree;
    const signValid = loginValid || name.trim() === "";
    if ((type === "Login" && loginValid) || (type === "Sign" && signValid)) {
      alert("입력값 빔");
      return;
    }
    alert(type === "Sign" ? "Signup Success" : "Login Success");
  };
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] bg-white py-10 px-[25px] inter">
          <h1 className="text-xl font-bold text-[#4F4F4F] mb-[10px]">
            {type} Into App
          </h1>
          <p className="text-sm text-[#4F4F4F] mb-5">
            Please enter your details to continue.
          </p>
          <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
            {type === "Sign" && (
              <InputBox
                type="text"
                // ref={nameEl}
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <InputBox
              type="email"
              // ref={emailEl}
              placeholder="someone@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputBox
              type="password"
              // ref={passwordEl}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Checkbox
              checked={agree}
              onToggle={() => setAgree((prev) => !prev)}
            >
              I agree with terms and policies.
            </Checkbox>
            <Checkbox onToggle={() => setAgree((prev) => !prev)}>
              I agree with terms and policies.
            </Checkbox>
            <div className="flex flex-col gap-4 mt-4">
              <Button type="submit" className="bg-[#4F4F4F]">
                {type === "Sign" ? "Sign In" : "Log In"}
              </Button>
              <Button
                type="button"
                className="border border-[#4F4F4F] text-[#4F4F4F]"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setPassword("");
                  setType((prev) => (prev === "Login" ? "Sign" : "Login"));
                }}
              >
                Go To Log In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
