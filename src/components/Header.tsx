import MenuItem from "./Menu/MenuItem";
import Menu from "./Menu/Menu";

const Header: React.FC = () => {
  return (
    <header className="h-16 ">
      <div className="w-5/6 mx-auto h-full flex flex-row justify-between items-center">
        <div>DANIAL</div>
        <Menu className={"md:hidden"} />
        <nav className="hidden md:block">
          <MenuItem
            className="text-right ml-5"
            path={"/"}
          >
            Home
          </MenuItem>
          <MenuItem
            className="text-right ml-5"
            path={"projects"}
          >
            Projects
          </MenuItem>
          <MenuItem
            className="text-right ml-5"
            path={"projects"}
          >
            Resume
          </MenuItem>
        </nav>
      </div>
    </header>
  );
};

export default Header;
