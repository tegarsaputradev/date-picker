type CalenderIconProps = {
  className?: string;
  rotate?: "rotate-180" | "rotate-90" | "-rotate-90";
  width?: string;
  height?: string;
};

const CalenderIcon: React.FC<CalenderIconProps> = ({
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
        viewBox="0 0 24 24"
        width={width ?? "1em"}
        height={height ?? "1em"}
        style={{ overflow: "visible", color: "currentcolor" }}
      >
        <path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z" />
      </svg>
    </p>
  );
};

export default CalenderIcon;
