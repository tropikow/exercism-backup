// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {     
  let result = 0;
  for(let i = 0; i < birdsPerDay.length; i++) {    
    result += birdsPerDay[i];
  }
  return result
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {    
  let result = 0;
  const flatArray = []  
  for(let i = 0 ; i < birdsPerDay.length ; i++) {
    flatArray.push(birdsPerDay[i])
  }    
  let daysByWeek = 7
  const numberOfWeeks = flatArray.length / daysByWeek;       
  let start = 0;
  let end = daysByWeek;  
  const sortWeeks = []  
  for(let i = 0; i <= numberOfWeeks; i++) {         
    const currentWeek = flatArray.slice(start,end)    
    sortWeeks.push(currentWeek)    
    start = end;    
    end += daysByWeek;     
  }    
  const selectedWeek = sortWeeks[week -1]    
  for(const number of selectedWeek) {    
    result += number
  }
  return result
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {    
  for(let i = 0; i < birdsPerDay.length; i++) {
    birdsPerDay[i] += 1    
    i++
  }
  return birdsPerDay
}
