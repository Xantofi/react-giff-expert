import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiffExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GiffExpertApp</h1>

      <AddCategory
        onNewValue={(newCategory) => {
          onAddCategory(newCategory);
        }}
      />

      {categories.map((categor) => (
        <GifGrid key={categor} category={categor} />
      ))}
    </>
  );
};
