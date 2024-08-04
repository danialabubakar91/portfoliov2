import Header from './Header';
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
      <div className="text-gray-50 bg-slate-800">
        <div className="flex flex-col">
          <Header />
          <Outlet />
        </div>
      </div>
  );
};

export default Layout;
