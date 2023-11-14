"use client";
import { useState } from "react";
import { Dropdown, SearchBar } from "keep-react";
import { ArrowRight, MagnifyingGlass } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const books = [
  { id: 1, name: "To Kill a Mockingbird" },
  { id: 2, name: "Pride and Prejudice" },
  { id: 3, name: "1984" },
  { id: 4, name: "The Great Gatsby" },
  { id: 5, name: "Moby Dick" },
  { id: 6, name: "The Catcher in the Rye" },
  { id: 7, name: "Jane Eyre" },
  { id: 8, name: "The Lord of the Rings" },
  { id: 9, name: "To the Lighthouse" },
  { id: 10, name: "Brave New World" },
];

// Import necessary components and hooks

export const SearchBarComponent = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const results = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm)
    );

    if (searchTerm === "") {
      setData([]);
    } else {
      setData(results);
    }
  };

  const handleKeyDown = (event) => {
    console.log("Key pressed:", event.key);
    if (event.key === "Enter") {
      console.log("Inside Enter condition");
      if (data.length > 0) {
        console.log("pressed");
        const enteredValue = data[0].name.toLowerCase();
        navigate(`/search/${enteredValue}`);
      }
    }
  };

  return (
    <SearchBar
      placeholder="Find anything you would like to rent..."
      addon={<MagnifyingGlass size={20} color="#002F34" />}
      addonPosition="left"
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}
      size="md"
    >
      <ul>
        {data.map((book) => (
          <Dropdown.Item key={book?.id}>
            {book?.name}
            <span className="ml-auto">
              <ArrowRight size={20} color="#5E718D" />
            </span>
          </Dropdown.Item>
        ))}
      </ul>
    </SearchBar>
  );
};

