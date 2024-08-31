import MenuItem from "./Menu/MenuItem";
import Menu from "./Menu/Menu";
import MenuDropdown from "./Menu/MenuDropdown";
import useToggle from "../hooks/useToggle";
import { useRef } from "react";
import useCloseMenu from "../hooks/useCloseMenu";

const Header: React.FC = () => {
  const [on, toggleOn] = useToggle({ initialOn: false });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);


  useCloseMenu(navRef, dropdownRef,menuButtonRef,()=>{
      if(on){
        toggleOn();
      }
    },on)
    
  return (
    <Menu>
      <header className="header-height max-w-screen-2xl w-4/5 mx-auto flex flex-row justify-between items-center sticky top-0 bg-slate-800">
        <div>DANIAL</div>
        <button className="block md:hidden" ref={menuButtonRef} onClick={toggleOn}>{on?'X':'Button'}</button>
        <nav ref={navRef} className="hidden md:block">
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
      {on && (
        <div ref={dropdownRef} className='dropdown-header-pos h-80 bg-white bg-opacity-10 w-full md:hidden'>
          <MenuDropdown className="">
            <MenuItem className="text-right ml-5" path={"/"}>
              Home
            </MenuItem>
            <MenuItem className="text-right ml-5" path={"projects"}>
              Projects
            </MenuItem>
            <MenuItem className="text-right ml-5" path={"projects"}>
              Resume
            </MenuItem>
          </MenuDropdown>
        </div>
      )}
    </Menu>
  );
};

export default Header;
