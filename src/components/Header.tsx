import MenuItem from "./Menu/MenuItem";
import MenuDropdown from "./Menu/MenuDropdown";
import MenuButton from "./Menu/MenuButton";
import Menu from "./Menu/Menu";
import MenuRadix from "./Menu/MenuRadix";

const Header: React.FC = () => {
  return (
    <header>
      <div className="w-4/5 mx-auto flex justify-between pt-5">
        <div >DANIAL</div>
        <MenuRadix className={"md:hidden"}/>
        <nav className="mr-10p hidden md:block">
            <MenuItem path={"/"}>Home</MenuItem>
            <MenuItem path={"projects"}>Projects</MenuItem>
            <MenuItem path={"projects"}>Resume</MenuItem>
          </nav>
      </div>
    </header>
    // <header>
    //   <Menu>
    //     <div className="flex justify-between pt-5">
    //       <div className="ml-10p">DANIAL</div>
    //       <MenuButton className={"mr-10p md:hidden"} />
          // <nav className="mr-10p hidden md:block">
          //   <MenuItem path={"/"}>Home</MenuItem>
          //   <MenuItem path={"projects"}>Projects</MenuItem>
          //   <MenuItem path={"projects"}>Resume</MenuItem>
          // </nav>
    //     </div>
    //     <MenuDropdown>
    //       <div className="md:hidden">
    //         <MenuItem path={"/"}>Home</MenuItem>
    //         <MenuItem path={"projects"}>Projects</MenuItem>
    //         <MenuItem path={"projects"}>Resume</MenuItem>
    //       </div>
    //     </MenuDropdown>
    //   </Menu>
    // </header>
  );
};

export default Header;
