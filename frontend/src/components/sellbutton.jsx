"use client";
import { Button } from "keep-react";
import { Plus } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export const ButtonComponent = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    console.log("clicked");
    navigate("/sellform");
  };

  return (
    <>
      <div className="btn rounded-lg flex border-blue-300 border-2 shadow-sm ">
        <Button type="outlinePrimary" size="sm" onClick={handleOnClick}>
          <div className="flex gap-4 items-center">
            <Plus className="md:text-2xl text-lg" />
            SELL
          </div>
        </Button>
      </div>
    </>
  );
};
