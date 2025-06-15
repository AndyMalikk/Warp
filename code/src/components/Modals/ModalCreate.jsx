import React from "react";

const ModalCreate = ({ open, onClose, children }) => {
  return (
    <div>
      <div>
        {/*BACKDROP*/}
        <div
          onClick={onClose}
          className={`fixed inset-0 flex justify-center items-center transition-colors ${
            open ? "visible bg-black/50 z-50" : "invisible"
          }`}
        >
          {/*modal*/}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-[64rem] h-[40rem] bg-primary border-[1px] border-gray-950 shadow-2xl rounded-md transition-all z-40 ${
              open ? "scale-100" : "scale-125 opacity-0"
            }`}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-1 rounded-lg text-white hover:text-red-500"
            >
              X
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreate;
