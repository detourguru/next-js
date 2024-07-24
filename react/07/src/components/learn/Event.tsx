const Event = () => {
  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> // 화살표 함수로 타입추론을 통해 작성할 수 있다
  ) => {
    alert(console.log(e)); // 이벤트 객체 출력
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.type === "radio" || e.target.type === "text") {
      console.log(e.target.value);
    } else if (e.target.type === "checkbox") {
      console.log(e.target.checked);
    } else {
      console.log(e.target.value);
    }
  };

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 해당 요소의 기본 이벤트를 초기화함
    console.log("로그인!");
  };

  return (
    <>
      <h1>App Component</h1>
      {/* action에 url을 입력해 전송하기보다는 함수내에서 처리하도록 한다 */}
      <form action="" onSubmit={login}>
        {/* form tag 안에서 submit 할 경우 내부적으로 전송이 일어난다 */}
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">로그인</button>
      </form>
      <input
        type="radio"
        name="gender"
        value={"male"}
        onChange={(e) => onChangeHandler(e)}
      />
      male
      <input
        type="radio"
        name="gender"
        value={"female"}
        checked={true}
        onChange={(e) => onChangeHandler(e)}
      />
      female
      <br />
      <select onChange={(e) => onChangeHandler(e)}>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Carrot">Carrot</option>
      </select>
      <br />
      <input type="checkbox" onChange={(e) => onChangeHandler(e)} />
      <input type="text" onChange={(e) => onChangeHandler(e)} />
      <button onClick={(result) => onClickHandler(result)}>클릭</button>
    </>
  );
};
export default Event;
