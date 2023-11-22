const getIngredientInfo = async (shoppingList, ingredients) => {
    const result = shoppingList.map(({ ingredientId, measure, recipeId }) => {
    const obj2 = ingredients.find(
      ingredient =>
        JSON.stringify(ingredient._id) === JSON.stringify(ingredientId)
    );
    return { ...obj2._doc, measure, recipeId };
  });

  return result;
};

module.exports = getIngredientInfo;