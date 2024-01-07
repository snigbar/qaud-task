import { before } from "node:test";

type Props = {
  className?: string;
  onClick?: () => void;
  style?: object;
};

export function SampleNextArrow(props: Props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
      }}
      onClick={onClick}
    ></div>
  );
}

export function SamplePrevArrow(props: Props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
      }}
      onClick={onClick}
    ></div>
  );
}
