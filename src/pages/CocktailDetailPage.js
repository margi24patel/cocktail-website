import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CocktailDetail from "../components/CocktailDetail";
import CircularProgress from "@material-ui/core/CircularProgress";

const CocktailDetailPage = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCocktailDetails = async () => {
      const resp = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await resp.json();
      // console.log("cocktail-detail-page", data);
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strGlass: glass,
          strCategory: category,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newData = {
          name,
          image,
          info,
          glass,
          category,
          ingredients,
          instructions,
        };
        setCocktail(newData);
      }
    };
    getCocktailDetails();
    setLoading(false);
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Cocktail Details</h1>
      {cocktail && <CocktailDetail {...cocktail} />}
    </>
  );
};

export default CocktailDetailPage;
