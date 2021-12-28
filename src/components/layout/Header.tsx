import { useTheme } from "next-themes";
import { useEffect } from "react";

import { RiMoonFill, RiSunLine } from "react-icons/ri";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);
  return (
    <header className="flex justify-between items-center py-3">
      <h2 className="text-2xl font-bold underline">nextailwind-starter</h2>
      <button
        className="button text-white"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {resolvedTheme === "light" ? <RiMoonFill /> : <RiSunLine />}
      </button>
    </header>
  );
};

export default Header;
