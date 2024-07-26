import { forwardRef, useId } from "react";

type TInputProps = React.ComponentPropsWithRef<"input">;

const InputBox = forwardRef<HTMLInputElement, TInputProps>(
  ({ ...rest }, ref) => {
    return (
      <input
        id={useId()}
        ref={ref}
        className="h-[44px] rounded-lg border border-[#4F4F4F] py-[13.5px] px-4 placeholder:text-[#ACACAC] outline-none text-black text-sm"
        {...rest}
      />
    );
  }
);
export default InputBox;
