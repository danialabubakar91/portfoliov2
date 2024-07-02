import { MenuContext } from "./Menu";
import { useContext, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MenuDropdown: React.FC<Props> = ({ children }: Props) => {
  const { isOpen } = useContext(MenuContext);
  return isOpen ? (
    <>{children}</>
  ) : // <div className='md:hidden'>
  //   <h1 className="border-t border-gray-600">Home</h1>
  //   <h1 className="border-t border-gray-600">Projects</h1>
  //   <h1 className="border-y border-gray-600">Resume</h1>
  // </div>
  null;
};

export default MenuDropdown;
