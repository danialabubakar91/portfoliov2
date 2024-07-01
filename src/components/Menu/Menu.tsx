import { createContext, ReactNode } from "react";
import useToggle from "../../hooks/useToggle";

interface Props {
  children: ReactNode;
}

interface MenuContextType {
  isOpen: boolean;
  toggleOpen: () => void;
}

const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  toggleOpen: () => {},
});
export { MenuContext };

const Menu: React.FC<Props> = ({ children }: Props) => {
  const [isOpen, toggleOpen] = useToggle({ initialValue: false });
  return (
    <MenuContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export default Menu;
