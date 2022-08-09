import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [caterogies, setCategories] = useState(["Futbol"]);

  const onAddCategory = (newCategorie) => {
    if (caterogies.includes(newCategorie)) return;
    setCategories([newCategorie, ...caterogies]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onAddCategory={onAddCategory} />

      {caterogies.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
