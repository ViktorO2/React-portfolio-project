import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
