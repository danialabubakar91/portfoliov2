import { createContext, ReactNode } from "react";
import useToggle from "../../hooks/useToggle";

interface Props {
  children: ReactNode;
}

interface MenuContextType {
  isOpen: boolean;
  toggleOpen: () => void;
  closeToggle: () => void;
}

const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  toggleOpen: () => {},
  closeToggle: () => {},
});
export { MenuContext };

const Menu: React.FC<Props> = ({ children }: Props) => {
  const [isOpen, toggleOpen, closeToggle] = useToggle({ initialValue: false });
  return (
    <MenuContext.Provider value={{ isOpen, toggleOpen, closeToggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export default Menu;
