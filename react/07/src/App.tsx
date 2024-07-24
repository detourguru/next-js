import Button from "./components/homework/Button";
import InputBox from "./components/homework/InputBox";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <InputBox type="text" placeholder="Enter Todo List" />
        <div className="flex flex-col gap-2">
          <Button type="button" className="bg-[#4F4F4F]">
            Add
          </Button>
          <Button type="button" className="bg-[#ED4848]">
            Cancel
          </Button>
          <Button type="button" className="bg-[#7D48ED]">
            Success
          </Button>
        </div>
      </div>
    </>
  );
};
export default App;
