export type TUserInfo = {
  uname: string;
  uage: number;
  ugender?: string;
  onFinishEat?: () => void; // 반환 값이 없는 일반적인 함수임
};
