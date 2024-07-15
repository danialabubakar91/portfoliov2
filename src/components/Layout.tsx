import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col text-gray-50 bg-slate-800">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
