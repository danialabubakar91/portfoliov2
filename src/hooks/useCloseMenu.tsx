import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useCloseMenu = (
  navRef: React.RefObject<HTMLElement>,
  dropdownRef: React.RefObject<HTMLElement>,
  menuBtnRef: React.RefObject<HTMLElement>,
  toggleOn: () => void,
  on: boolean
) => {
  const location = useLocation();

  useEffect(() => {
    // useEffect only when on true
    if (!on) {
      return;
    }

    const handleMouseDown = (e: MouseEvent) => {
      // Return if mouse clicks on dropdown menu or menu button
      if (
        dropdownRef.current === null ||
        menuBtnRef.current === null ||
        dropdownRef.current.contains(e.target as Node) ||
        menuBtnRef.current.contains(e.target as Node)
      ) {
        return;
      }

      // Toggles on back to false (closes dropdown menu) if mouse clicks outside of dropdown menu
      toggleOn();
    };

    
    const handleResize = () => {
      if(navRef.current && getComputedStyle(navRef.current).display=='block'){
        // Toggles on back to false (closes dropdown menu) if nav is displayed as block
        toggleOn();
      }
    };

    // Set both mouse clicks and window resize event listeners
    document.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [on]);

  
  // Handle URL change
  useEffect(() => {
    if (on) {
      toggleOn();
    }
  }, [location]);
};

export default useCloseMenu;
