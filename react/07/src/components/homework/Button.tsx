type TBtnProps = React.ComponentPropsWithoutRef<"button">;

const Button = ({ className, children, ...rest }: TBtnProps) => {
  return (
    <>
      <button
        className={`${className} w-[77px] h-[44px] text-sm text-white rounded-lg cursor-pointer font-[Inter]`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
