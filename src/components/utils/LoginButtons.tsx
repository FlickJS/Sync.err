import React from "react";

interface Website {
  name: string;
  icon: string;
}

interface LoginButtonsProps {
  website: Website;
}

const LoginButtons: React.FC<LoginButtonsProps> = ({ website }) => {
  return (
    <div
      style={{ margin: "10px", display: "flex", alignItems: "center" }}
      className="p-5 w-64 bg-white text-2xl border-gray-950 border-4 justify-evenly"
    >
      <img
        src={website.icon}
        alt={website.name}
        style={{ width: "50px", marginRight: "10px" }}
      />
      <div>{website.name}</div>
    </div>
  );
};

export default LoginButtons;
