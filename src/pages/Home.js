import React, { useState, useEffect } from "react";
import CocktailList from "../components/CocktailList";
import Search from "../components/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getDrinks = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCocktails = drinks.map((cocktailProps) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = cocktailProps;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      }
    };
    getDrinks();
    setLoading(false);
  }, [search]);

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Container>
        <h1 style={{ display: "none" }}>Home</h1>
        <Search setSearchValue={setSearch} />
        <CocktailList cocktails={cocktails} loading={loading} />
      </Container>
    </>
  );
};

export default Home;
