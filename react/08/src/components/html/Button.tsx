type TBtnProps = React.ComponentPropsWithoutRef<"button">;

const Button = ({ className, children, ...rest }: TBtnProps) => {
  return (
    <>
      <button
        type="button"
        className={`h-[44px] text-sm rounded-lg cursor-pointer font-[Inter] ${className}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
