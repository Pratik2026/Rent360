"use client";
import { Dropdown } from "keep-react";

export const DropdownComponent = () => {
  return (
    <Dropdown
      label="Select Categories"
      size="sm"
      type="primary"
      dismissOnClick={true}
      color={"#002F34"}
    >
      <div className="flex justify-center items-center gap-2">
        <Dropdown.Item>Cars</Dropdown.Item>
        <Dropdown.Item>Mobiles</Dropdown.Item>
        <Dropdown.Item>Speakers</Dropdown.Item>
        <Dropdown.Item>Clothes</Dropdown.Item>
        <Dropdown.Item>Jwellery</Dropdown.Item>
        <Dropdown.Item>Apartments</Dropdown.Item>
        <Dropdown.Item>Motorcycles</Dropdown.Item>
        <Dropdown.Item>Bicycles</Dropdown.Item>
      </div>
    </Dropdown>
  );
};
