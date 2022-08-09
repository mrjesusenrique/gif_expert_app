import { useEffect } from "react";
import PropTypes from "prop-types";
import getGifs from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category);
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <p>Hola Mundo</p>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
