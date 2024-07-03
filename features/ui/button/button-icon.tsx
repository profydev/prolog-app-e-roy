interface ButtonIconProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ButtonIcon({
  src,
  alt = "button icon",
  width = 20,
  height = 20,
  className,
}: ButtonIconProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
