import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const cleanValue = inputValue.trim();
    if (cleanValue.trim().length <= 1) {
      return;
    }
    //setCategories((categorias) => [inputValue, ...categorias]);
    onNewValue(cleanValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Busca una categoria de gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
AddCategory.propTypes = {
  onNewValue: PropTypes.func,
};
