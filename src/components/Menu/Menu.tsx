import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import MenuItem from "./MenuItem";
import { useState, useEffect } from "react";

interface Props {
  className: string;
}

const Menu: React.FC<Props> = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean):void => {
    setIsOpen(open);
  };

  const handleLinkClick = ():void => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = ():void => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    if (isOpen) {
      window.addEventListener("resize", handleResize);
    } else {
      window.removeEventListener("resize", handleResize);
    }

    // Initial check
    handleResize();

    return ():void => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div className={className}>
      <DropdownMenu.Root open={isOpen} onOpenChange={handleOpenChange}>
        <DropdownMenu.Trigger asChild>
          <button>radixbutton</button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={`bg-white border border-indigo-600 w-screen flex flex-col items-center md:hidden`}
          >
            <DropdownMenu.Item className="border border-pink-600 w-full text-end">
              <MenuItem
                path="/"
                className="block"
                defaultFunc={handleLinkClick}
              >
                Home<span className="pr-[10vw]"></span>
              </MenuItem>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="border border-pink-600 w-full text-end">
              <MenuItem
                path="projects"
                className="block"
                defaultFunc={handleLinkClick}
              >
                Projects<span className="pr-[10vw]"></span>
              </MenuItem>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="border border-pink-600 w-full text-end">
              <MenuItem
                path="projects"
                className="block"
                defaultFunc={handleLinkClick}
              >
                Resume<span className="pr-[10vw]"></span>
              </MenuItem>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default Menu;
