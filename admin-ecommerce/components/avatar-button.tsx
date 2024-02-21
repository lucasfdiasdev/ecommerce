import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const AvatarButton = () => {
  return (
    <Avatar>
      <AvatarImage src="/user.jpg" />
    </Avatar>
  );
};

export default AvatarButton;
