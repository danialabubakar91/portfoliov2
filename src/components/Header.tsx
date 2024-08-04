import MenuItem from "./Menu/MenuItem";
import Menu from "./Menu/Menu";

const Header: React.FC = () => {
 
  return (
    <>
    <header className='header-height max-w-screen-2xl w-4/5 mx-auto flex flex-row justify-between items-center sticky top-0 bg-slate-800'>
      <div>DANIAL</div>
      <Menu className={"md:hidden"} />
      <nav className="hidden md:block">
        <MenuItem className="text-right ml-5" path={"/"}>
          Home
        </MenuItem>
        <MenuItem className="text-right ml-5" path={"projects"}>
          Projects
        </MenuItem>
        <MenuItem className="text-right ml-5" path={"projects"}>
          Resume
        </MenuItem>
      </nav>
    </header>
    <div className="dropdown-header-pos h-80 w-full bg-white"></div>
    </>
  );
};

export default Header;
