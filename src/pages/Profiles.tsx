import React from "react";
import LoginButtons from "../components/utils/LoginButtons";

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

const Profiles: React.FC<ProfilesProps> = ({ customerInfo }) => {
  return (
    <div className="main__container flex flex-col justify-center items-center">
      <h2 className="pb-8 text-5xl	font-bold">Choose website/app</h2>
      <div className="flex flex-row">
        {customerInfo.websites.map((website, index) => (
          <LoginButtons key={index} website={website} />
        ))}
      </div>
    </div>
  );
};

export default Profiles;
