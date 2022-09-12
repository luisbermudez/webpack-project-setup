import "./styles/index.scss";

const elevenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elevenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elevenShieldRecipe);
console.log(elvenGauntletsRecipe);
