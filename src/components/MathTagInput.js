import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const TagsInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event, value) => {
    setInputValue(value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      const newTag = inputValue.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setInputValue("");
      }
    } else if (
      event.key === "+" ||
      event.key === "-" ||
      event.key === "*" ||
      event.key === "/" ||
      event.key === "(" ||
      event.key === ")"
    ) {
      setInputValue((prevValue) => prevValue + event.key);
      event.preventDefault(); // Prevent the character from being inserted in the input field
    } else if (event.key === "Backspace" && inputValue === "") {
      setTags(tags.slice(0, tags.length - 1));
    }
  };

  return (
    <Autocomplete
      multiple
      options={['one', 'two', 'four', 'six']}
      freeSolo
      value={tags}
      inputValue={inputValue}
      onChange={(event, value) => setTags(value)}
      onInputChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Tags" />
      )}
    />
  );
};

export default TagsInput;
