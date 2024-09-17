import React from "react";

function Header({ title, text }) {
  return (
    <div>
      <h2 className="font-ub text-[#02254A] text-[30px]">{title}</h2>
      <p className="font-reg text-[#C0C1C7] text-sx ">{text}</p>
    </div>
  );
}

export default Header;
