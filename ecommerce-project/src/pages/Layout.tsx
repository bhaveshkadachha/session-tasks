import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Model from "../components/Model";
import { useSelector } from "react-redux";
import type { State } from "../store/store";
import Cart from "../components/Cart/Cart";

function Layout() {
  const isModelOpen = useSelector((state: State) => state.model.isModelOpen);
  return (
    <div className="bg-[#F6F6F6]">
      <Header />
      <div className="px-10">
        <Outlet />
      </div>
      {isModelOpen && (
        <Model>
          <Cart />
        </Model>
      )}
    </div>
  );
}

export default Layout;
