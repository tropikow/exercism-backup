/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
const pizzaPriceMap = {
  'Margherita': 7,
  'Caprese': 9,
  'Formaggio': 10
}

const extraIngredients = {
  'ExtraSauce': 1,
  'ExtraToppings': 2
}

export function pizzaPrice(pizza, ...extras) {          
  if(extras.length === 0) return pizzaPriceMap[pizza] 
  const currentIngredient = extras.splice(0,1)  
  return pizzaPrice(pizza, ...extras) + extraIngredients[currentIngredient[0]]
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {  
  if(pizzaOrders.length < 1) return 0
  let totalAmount = 0
  for(const {pizza, extras} of pizzaOrders) {    
    totalAmount += pizzaPrice(pizza, ...extras)
  }  
  return totalAmount
}
