import { useTheme } from "next-themes";

import { RiMoonFill, RiSunLine } from "react-icons/ri";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <header className="flex justify-between items-center">
      <h2 className="text-2xl font-bold underline">nextailwind-starter</h2>
      <button
        className="button"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {resolvedTheme === "light" ? <RiMoonFill /> : <RiSunLine />}
      </button>
    </header>
  );
};

export default Header;
