import Actions from "./Actions";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <div className="flex justify-between h-24 items-center font-sans bg-[#F6F6F6] sticky top-0 z-10 p-10">
      <Logo />
      <Menu />
      <Actions />
    </div>
  );
}

export default Header;
