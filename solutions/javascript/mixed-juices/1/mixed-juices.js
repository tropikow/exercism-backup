// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let result = 0;
  switch(name) {
    case 'Pure Strawberry Joy':
      result = 0.5
      break;
    case 'Energizer':
      result = 1.5
      break;
    case 'Green Garden':
      result = 1.5
      break;
    case 'Tropical Island':
      result = 3
      break;
    case 'All or Nothing':
      result = 5
      break;
    default:
      result = 2.5
  }
  return result
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {         
  let totalLimes = 0;
  let totalWedges = 0;
  do {
    for(const lime of limes) {    
      if(totalWedges >= wedgesNeeded) return totalLimes;
      switch(lime) {
        case 'small':
          totalWedges += 6;
          break;
        case 'medium':
          totalWedges += 8;
          break;
        case 'large':
          totalWedges += 10;
          break;
      }
      totalLimes++
    }    
    return totalLimes
  } while (totalLimes <= limes.length)
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {      
  for(let i= 0; timeLeft > 0; i++) {      
    timeLeft = timeLeft - timeToMixJuice(orders[0])    
    orders.shift()    
  }    
  return orders
}
