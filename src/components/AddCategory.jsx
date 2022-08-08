import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newValue = inputValue.trim();
    if (newValue.length <= 1) return;
    onAddCategory(newValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
      <button onClick={onSubmit}>Agregar Categoría</button>
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};

export default AddCategory;
