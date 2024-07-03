import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface Props {
  className: string;
}

const MenuRadix: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={className}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>radixbutton</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
            <DropdownMenu.Content className="bg-white border border-indigo-600 w-screen flex flex-col items-center">
              <DropdownMenu.Item className="border border-pink-600 w-4/5 text-end">radix home</DropdownMenu.Item>
              <DropdownMenu.Item className="border border-pink-600 w-4/5 text-end">radix projects</DropdownMenu.Item>
              <DropdownMenu.Item className="border border-pink-600 w-4/5 text-end">radix resume</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default MenuRadix;
