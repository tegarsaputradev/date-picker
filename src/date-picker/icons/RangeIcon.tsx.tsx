type RangeIconProps = {
  className?: string;
  rotate?: "rotate-180" | "rotate-90" | "-rotate-90";
  width?: string;
  height?: string;
};

const RangeIcon: React.FC<RangeIconProps> = ({
  className,
  rotate,
  height,
  width,
}) => {
  return (
    <p className={`${className}`}>
      <svg
        className={`${rotate}`}
        fill="currentColor"
        strokeWidth="0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        height={`${height ?? "1em"}`}
        width={`${width ?? "1em"}`}
        style={{ overflow: "visible", color: "currentcolor" }}
      >
        <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"></path>
      </svg>
    </p>
  );
};

export default RangeIcon;
