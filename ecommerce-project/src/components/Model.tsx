import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { modelActions } from "../store/model-slice";

function Model({ children}: { children: React.ReactNode }) {
  const dispatch = useDispatch()
  return createPortal(
    <div className="fixed top-0 w-[99vw] h-screen bg-black/50 z-20 flex justify-end items-center" onClick={()=>dispatch(modelActions.onClose())}>
      {children}
    </div>,
    document.getElementById("portal")!
  );
}

export default Model;
