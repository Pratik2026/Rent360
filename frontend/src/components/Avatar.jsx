/* eslint-disable react/prop-types */
"use client";
import { Avatar, Popover } from "keep-react";
import { User, Heart, SignOut } from "phosphor-react";

const PopoverContent = () => {
  return (
    <div className="flex flex-col justify-center gap-2 w-40">
      <div className="flex gap-4 hover:outline rounded-md hover:outline-custom_primary hover:outline-2 py-2 text-textcolor font-medium">
        <User size={20} />
        <p>View Profile</p>
      </div>
      <hr />
      <div className="flex gap-4 hover:outline rounded-md hover:outline-custom_primary hover:outline-2 py-2 text-textcolor font-medium">
        <Heart size={20} />
        <p>Wishlist</p>
      </div>
      <hr />
      <div className="flex gap-4 hover:outline rounded-md hover:outline-custom_primary hover:outline-2 py-2 text-textcolor font-medium">
        <SignOut size={20} />
        <p>Logout</p>
      </div>
    </div>
  );
};

export const AvatarComponent = ({ avatar }) => {
  return (
    
    <Popover additinalContent={<PopoverContent />} customClass="shadow-md">
      <Avatar shape="rounded" img={avatar} size="md"/>
    </Popover>
  );
};
