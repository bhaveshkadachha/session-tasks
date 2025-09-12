import { createPortal } from "react-dom";

function Model({ children, onClose }: { children: React.ReactNode, onClose: (state: boolean)=>void }) {
  return createPortal(
    <div className="fixed top-0 w-[99vw] h-screen bg-black opacity-50 z-20 flex justify-end items-center" onClick={()=>onClose(false)}>
      {children}
    </div>,
    document.getElementById("portal")!
  );
}

export default Model;
