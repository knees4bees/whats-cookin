class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }

  returnInstructions() {
    return this.instructions;
  }

  getIngredientsCost() {

  }
}

module.exports = Recipe;