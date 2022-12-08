import React from "react";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";

function Favorites({ myFavorites }) {
  const dispatch = useDispatch();

  function handleSort(e) {
    dispatch(orderCards(e.target.value));
  }

  function handleFilter(e) {
    dispatch(filterCards(e.target.value));
  }

  return (
    <div className={styles.cards}>
      <div className={styles.favs}>
        <select
          className={styles.select}
          onChange={handleSort}
          defaultValue="Ascendente"
        >
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select
          className={styles.select}
          onChange={handleFilter}
          defaultValue="All"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unkknown">Unkknown</option>
          <option value="All">All</option>
        </select>
      </div>
      <div className={styles.cards}>
        {myFavorites.length > 0 ? (
          myFavorites.map((c) => (
            <Card id={c.id} key={c.id} name={c.name} image={c.image} />
          ))
        ) : (
          <span className={styles.span}>Oh oh, aqui no hay nada</span>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
