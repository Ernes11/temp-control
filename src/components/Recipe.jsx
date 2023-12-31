import React from "react";

const Recipe = ({title,calories,image, ingredients}) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient=> (
            <li key={key}>{ingredient.text}</li>

        ))}

      </ol>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
