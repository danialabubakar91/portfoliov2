import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  className: string;
}

const MenuRadix: React.FC<Props> = ({ className }: Props) => {

    const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    console.log('something happened here')
    setIsOpen(open);
  };

  const handleLinkClick = () => {
    console.log('something happened there')
    setIsOpen(false);
  };

  return (
    <div className={className}>
      <DropdownMenu.Root open={isOpen} onOpenChange={handleOpenChange}>
        <DropdownMenu.Trigger asChild>
          <button>radixbutton</button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={`bg-white border border-indigo-600 w-screen flex flex-col items-center`}
          >
            <DropdownMenu.Item className="border border-pink-600 w-full text-end">
              <Link to="/" className="block" onClick={handleLinkClick}>
                Home<span className="pr-[10vw]"></span>
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="border border-pink-600 w-full text-end">
              <Link to="projects" className="block">
                Projects<span className="pr-[10vw]"></span>
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="border border-pink-600 w-full text-end">
              <Link to="projects" className="block">
                Resume<span className="pr-[10vw]"></span>
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default MenuRadix;
