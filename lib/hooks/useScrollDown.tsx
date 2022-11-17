import { useEffect, useState } from "react";

type ScrollNumber = number | undefined;

export default function useScrollDown(num: ScrollNumber = 50) {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > num) {
      setIsScrolledDown(true);
    }
    if (offset < num) {
      setIsScrolledDown(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return isScrolledDown;
}
