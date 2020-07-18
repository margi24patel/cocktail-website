import React, { useRef, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

const Search = ({ setSearchValue }) => {
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchInputChangeHandler = () => {
    setSearchValue(searchValue.current.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <h2>Search Cocktails</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={searchValue}
            onChange={searchInputChangeHandler}
            name="name"
            id="name"
            style={{ fontSize: "20px" }}
            placeholder="search..."
          />
        </form>
      </Grid>
    </>
  );
};

export default Search;
