
import { Dropdown } from "keep-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const DropdownComponent = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
      navigate(`/search/${category}`);
    } else {
      setSelectedCategory(null);
    }
  };

  return (
    <Dropdown
      label="Select Categories"
      size="sm"
      type="primary"
      onClose={() => setSelectedCategory(null)}
      dismissOnClick={true}
      color={"#002F34"}
    >
      <div className="flex items-center gap-2 flex-wrap">
        <Dropdown.Item>
          <a href="/search/car" onClick={() => handleClick}>Cars</a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="/search/mobile">Mobiles</a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="/search/speaker">Speakers</a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="/search/clothes">Clothes</a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="/search/jwellery">Jewellery</a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="/search/apartment">Apartments</a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="/search/motorcycle">Motorcycles</a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="/search/bicycle">Bicycles</a>
        </Dropdown.Item>
      </div>
    </Dropdown>
  );
};
