import MenuItem from "./Menu/MenuItem";
import MenuDropdown from "./Menu/MenuDropdown";
import MenuButton from "./Menu/MenuButton";
import Menu from "./Menu/Menu";

const Header: React.FC = () => {
  return (
    <header>
      <Menu>
        <div className="flex justify-between pt-5">
          <div className="ml-10p">DANIAL</div>
          <MenuButton className={"mr-10p md:hidden"}/>
          <nav className="mr-10p hidden md:block">
            <MenuItem path={"/"}>Home</MenuItem>
            <MenuItem path={"projects"}>Projects</MenuItem>
            <MenuItem path={"projects"}>Resume</MenuItem>
          </nav>
        </div>
        <MenuDropdown />
      </Menu>
    </header>
  );
};

export default Header;
