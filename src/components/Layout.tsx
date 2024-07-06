import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-blue-400">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
