import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Model from "../components/Model";
import { useState } from "react";

function Layout() {
  const [isModelOpen, setIsModelOpen] = useState<boolean>(true);
  return (
    <div className="bg-[#F6F6F6]">
      <Header />
      <div className="px-10">
        <Outlet />
      </div>
      {isModelOpen && <Model onClose={setIsModelOpen}><div className="bg-white w-96 h-[600px]"></div></Model>}
    </div>
  );
}

export default Layout;
