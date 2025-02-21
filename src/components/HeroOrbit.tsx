import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={`flex items-start justify-start rotate-${rotation} size-${size}`}
      >
        <div className={`inline-flex rotate-${rotation * -1}`}>{children}</div>
      </div>
    </div>
  );
};
