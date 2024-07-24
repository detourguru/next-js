import { TUserInfo } from "../../../type";

// 모든 props가 아닌 필요한 props만 받기 위해서 아래와 같이 사용할 수 있다
const Greeting = ({ uname, uage }: TUserInfo) => {
  return (
    <h1>
      Hello {uage} years old {uname}
    </h1>
  );
};

export default Greeting;
