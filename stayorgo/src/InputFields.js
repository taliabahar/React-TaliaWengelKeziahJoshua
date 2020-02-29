import React, { useState } from "react";
import logo from "./logo.svg";
import "./InputFields.css";
import {
  searchRecipe,
  nutritionResults,
  menuItemSearch,
  menuItemId
} from "./spoonAPI.js";

function InputFields() {
  const [foodEntry, setFoodEntry] = useState("");
  const [recipeID, setRecipeID] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeTitle, setRecipeTitle] = useState("");

  const [recipeCal, setRecipeCal] = useState("");
  const [recipeCarbs, setRecipeCarbs] = useState("");
  const [recipeFat, setRecipeFat] = useState("");
  const [recipeProtein, setRecipeProtein] = useState("");

  const [menuID, setMenuID] = useState("");
  const [menuImage, setMenuImage] = useState("");
  const [menuTitle, setMenuTitle] = useState("");
  const [menuChain, setMenuChain] = useState("");

  const [menuCal, setMenuCal] = useState("");
  const [menuCarbs, setMenuCarbs] = useState("");
  const [menuFat, setMenuFat] = useState("");
  const [menuProtein, setMenuProtein] = useState("");
  const [error, setError] = useState(null);

  // randomize results
  // loading message
  async function grabData() {
    try {
      const menuItemSearchResults = await menuItemSearch(foodEntry);
      // const searchRecipeResults = await searchRecipe(foodEntry);

      // setRecipeID(searchRecipeResults.results[0].id);
      // setRecipeImage(searchRecipeResults.results[0].image);
      // setRecipeTitle(searchRecipeResults.results[0].title);
      setMenuID(menuItemSearchResults.menuItems[0].id);
      // setMenuImage(menuItemSearchResults.menuItems[0].image);
      // setMenuTitle(menuItemSearchResults.menuItems[0].title);
      // setMenuChain(menuItemSearchResults.menuItems[0].restaurantChain);

      // const recipeNutritionInfo = await nutritionResults(recipeID);
      // const menuItemNutritionInfo = await menuItemId(menuID);
      console.log("ID I want: " + menuItemSearchResults.menuItems[0].id);
      console.log("ID" + menuID);

      // setRecipeCal(recipeNutritionInfo.calories);
      // setRecipeCarbs(recipeNutritionInfo.carbs);
      // setRecipeFat(recipeNutritionInfo.fat);
      // setRecipeProtein(recipeNutritionInfo.protein);
      // setMenuCal(menuItemNutritionInfo.nutrition.calories);
      // setMenuCarbs(menuItemNutritionInfo.nutrition.carbs);
      // setMenuFat(menuItemNutritionInfo.nutrition.fat);
      // setMenuProtein(menuItemNutritionInfo.nutrition.protein);
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  }

  function onKeyDownHandler(e) {
    e.preventDefault();
    // if (e.keyCode === 13) {
    // console.warn("hi");
    grabData();
    // console.log("MENU TITLE:" + menuTitle);
    // }
  }

  return (
    <div className="FoodInput">
      <link rel="stylesheet" href="https://use.typekit.net/mdr8lxf.css"></link>
      <h1>Should I Stay? or Should I Go?</h1>
      <form>
        <input
          id="foodInfo"
          placeholder="  What are you craving?"
          type="text"
          onChange={e => setFoodEntry(e.target.value)}
          value={foodEntry}
          // onKeyDown={onKeyDownHandler.bind(this)}
        ></input>
      </form>
      <button onClick={onKeyDownHandler}>TEST</button>
    </div>
  );
}

export default InputFields;
