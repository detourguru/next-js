import { TUserInfo } from "../../../type";

const Eat = (props: TUserInfo) => {
  return (
    <>
      <h1>
        {props.uname} ({props.uage}, {props.ugender}) 님이 식사를 시작합니다.
      </h1>
      <button onClick={props.onFinishEat}>식사 완료</button>
    </>
  );
};
export default Eat;
