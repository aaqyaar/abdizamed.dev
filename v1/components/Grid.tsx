import React from "react";

export default function Grid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 ${className}`}
    >
      {children}
    </div>
  );
}
