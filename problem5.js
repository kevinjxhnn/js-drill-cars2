const inventory = require("./inventoryData")
const { getYearArray } = require("./problem4")

// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

function getCountOfCarsOlderThan2000(inventory){

   const yearsArray = getYearArray(inventory)

   let filterYearLess2000 = yearsArray.filter(years => years < 2000) 

   console.log(`There are ${filterYearLess2000.length} cars older than 2000`)
}

function getDetailsOfCarsOlderThan2000(inventory){
   const detailsOfCarsArray = inventory.filter(item => item.car_year < 2000)

   console.log(detailsOfCarsArray)
}


module.exports = { getCountOfCarsOlderThan2000, getDetailsOfCarsOlderThan2000}