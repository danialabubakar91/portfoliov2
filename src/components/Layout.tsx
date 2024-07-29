import Header from './Header';
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
      <div className="text-gray-50 bg-slate-800">
        <div className="flex flex-col max-w-screen-2xl w-4/5 mx-auto">
          <Header />
          <Outlet />
        </div>
      </div>
  );
};

export default Layout;
