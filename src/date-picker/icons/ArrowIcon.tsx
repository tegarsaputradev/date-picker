type ArrowIconProps = {
  className?: string;
  rotate?: "rotate-180" | "rotate-90" | "-rotate-90";
  width?: string;
  height?: string;
};

const ArrowIcon: React.FC<ArrowIconProps> = ({
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
        viewBox="0 0 320 512"
        height={`${height ?? "1em"}`}
        width={`${width ?? "1em"}`}
        style={{ overflow: "visible", color: "currentcolor" }}
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
      </svg>
    </p>
  );
};

export default ArrowIcon;
