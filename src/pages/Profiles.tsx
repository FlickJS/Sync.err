import React from "react";

interface User {
  login: string;
  password: string;
  websites: {
    name: string;
    icon: string;
  }[];
}

interface ProfilesProps {
  customerInfo: User;
}

const Profiles: React.FC<ProfilesProps> = ({ customerInfo: User }) => {
  return (
    <div className="main__container flex flex-col justify-center flex-center items-center">
      <div>Choose website/app</div>
      {customerInfo &&
        customerInfo.websites.map((website, index) => (
          <div
            key={index}
            style={{ margin: "10px", display: "flex", alignItems: "center" }}
          >
            <img
              src={website.icon}
              alt={website.name}
              style={{ width: "30px", marginRight: "10px" }}
            />
            <div>{website.name}</div>
          </div>
        ))}
    </div>
  );
};

export default Profiles;
