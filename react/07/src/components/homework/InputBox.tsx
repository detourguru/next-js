type TInputProps = React.ComponentPropsWithRef<"input">;

const InputBox = ({ ...rest }: TInputProps) => {
  return (
    <>
      <input
        className="w-[240px] h-[44px] rounded-lg border border-[#4F4F4F] py-[13.5px] px-4 placeholder:text-[#ACACAC] outline-none text-black text-sm"
        {...rest}
      />
    </>
  );
};
export default InputBox;
