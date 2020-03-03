import React, { useState } from "react";
import logo from "./logo.svg";
import "./InputFields.css";
import Results from "./Results"
import {
  searchRecipe,
  nutritionResults,
  menuItemSearch,
  menuItemId,

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
      console.log("in grab data",menuItemSearchResults);

      // setRecipeID(searchRecipeResults.results[0].id);
      console.log("ID I want: " + menuItemSearchResults.menuItems);
      setMenuID(menuItemSearchResults.menuItems[0].id);


      // setRecipeImage(searchRecipeResults.results[0].image);
      // setRecipeTitle(searchRecipeResults.results[0].title);
      // setMenuImage(menuItemSearchResults.menuItems[0].image);
      // setMenuTitle(menuItemSearchResults.menuItems[0].title);
      // setMenuChain(menuItemSearchResults.menuItems[0].restaurantChain);

      // const recipeNutritionInfo = await nutritionResults(recipeID);
      // const menuItemNutritionInfo = await menuItemId(menuID);
 

      // setRecipeCal(recipeNutritionInfo.calories);
      // setRecipeCarbs(recipeNutritionInfo.carbs);
      // setRecipeFat(recipeNutritionInfo.fat);
      // setRecipeProtein(recipeNutritionInfo.protein);
      // setMenuCal(menuItemNutritionInfo.nutrition.calories);
      // setMenuCarbs(menuItemNutritionInfo.nutrition.carbs);
      // setMenuFat(menuItemNutritionInfo.nutrition.fat);
      // setMenuProtein(menuItemNutritionInfo.nutrition.protein);

      // ---------------------------------------------------------------------------
      // CAN INCOPORATE RANDOMIZATION ONCE WE GET APIS TO WORK :)
      // let randomRecipeIndex = Math.random() * searchRecipe.totalResults;
      // setRecipeID(searchRecipeResults.results[randomRecipeIndex].id);
      // setRecipeImage(searchRecipeResults.results[randomRecipeIndex].image);
      // setRecipeTitle(searchRecipeResults.results[randomRecipeIndex].title);

      // let randomMenuIndex = Math.random() * menuItemSearchResults.totalMenuItems;
      // setMenuID(menuItemSearchResults.menuItems[randomMenuIndex].id);
      // setMenuImage(menuItemSearchResults.menuItems[randomMenuIndex].image);
      // setMenuTitle(menuItemSearchResults.menuItems[randomMenuIndex].title);
      // setMenuChain(menuItemSearchResults.menuItems[randomMenuIndex].restaurantChain);
      // ---------------------------------------------------------------------------
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  }

 const onKeyDownHandler = (e) => {
    e.preventDefault();
    // if (e.keyCode === 13) {
    // console.warn("hi");
    grabData();
    let h = menuID
    //console.log("MENU TITLE:" + menuTitle);
    // }
  }


  return (
    <div className="FoodInput">
    {      console.log("menu id", menuID)}
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
        <h1>{menuID}</h1>
      </form>
      <button onClick={onKeyDownHandler}>TEST</button>
      <Results menuID={menuID} />
    </div>
  );
}

export default InputFields;
