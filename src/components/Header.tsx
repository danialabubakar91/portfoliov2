import MenuItem from "./Menu/MenuItem";
import MenuRadix from "./Menu/MenuRadix";

const Header: React.FC = () => {
  return (
    <header>
      <div className="w-4/5 mx-auto flex justify-between pt-5">
        <div >DANIAL</div>
        <MenuRadix className={"md:hidden"}/>
        <nav className="hidden md:block">
            <MenuItem className="text-right ml-5 border border-red-400" path={"/"}>Home</MenuItem>
            <MenuItem className="text-right ml-5 border border-red-400" path={"projects"}>Projects</MenuItem>
            <MenuItem className="text-right ml-5 border border-red-400" path={"projects"}>Resume</MenuItem>
          </nav>
      </div>
    </header>
  );
};

export default Header;
