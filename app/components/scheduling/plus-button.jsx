import React from "react";

function PlusButton({ btn_text }) {
  return (
    <div>
      <div
        className="btn btn-accent p-4 w-full"
        // onClick={() => {
        //   //   window.location.href = '/src/pages/create-content.html';
        // }}
      >
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plus_font_awesome.svg/1200px-Plus_font_awesome.svg.png"
          alt="Plus Icon"
          className="h-full rounded-xl"
        /> */}
        {btn_text}
      </div>
    </div>
  );
}

export default PlusButton;
