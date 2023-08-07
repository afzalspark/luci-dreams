import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { options } from "./options"

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
        setInputValue("");
        setTags([...tags, event.key]);   
        event.preventDefault();     
    } else if (event.key === "Backspace" && inputValue === "") {
      setTags(tags.slice(0, tags.length - 1));
    }
  };

  const getOptionLabel = (option) => {
    if ( option === "+" ||
          option === "-" ||
          option === "*" ||
          option === "/" ||
          option === "(" ||
          option === ")") {
      return <span className={"plus"}>{option}</span>;
    }
    return option;
  };

  return (
    <Autocomplete
      multiple
      options={options}
      freeSolo
      value={tags}
      inputValue={inputValue}
      getOptionLabel={getOptionLabel}
      onChange={(event, value) => setTags(value)}
      onInputChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
      isOptionEqualToValue={() => false}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Tags" />
      )}
    />
  );
};

export default TagsInput;
