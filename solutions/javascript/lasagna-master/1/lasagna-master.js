/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if(remainingTime === undefined) return 'You forgot to set the timer.'    
  return remainingTime === 0 ? 'Lasagna is done.' : 'Not done, please wait.'
}

export function preparationTime(layers, timePeerLayers) {
  return timePeerLayers ? layers.length * timePeerLayers : layers.length * 2
}

export function quantities(layers) {
  const totalNoodles = layers.filter(layer => layer === 'noodles')
  const totalSauces = layers.filter(layer => layer === 'sauce')
  return {
    noodles: totalNoodles.length * 50,
    sauce: totalSauces.length * 0.2
  }
}

export function addSecretIngredient(friendsList, myList) {  
  const lastIngredient = friendsList.at(-1)
  myList.push(lastIngredient)
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {}
  const factor = portions / 2
  for(const ingredient in recipe) {
    scaledRecipe[ingredient] =recipe[ingredient] * factor
  }
  return scaledRecipe
}