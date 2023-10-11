const inventory = require("./inventoryData")

// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:


function carDetailsOfId33(inventory){
    const filteredItem = inventory.filter(function(item) {
        return item.id == 33;
    })

    console.log(`Car 33 is a ${filteredItem[0].car_year} ${filteredItem[0].car_make} ${filteredItem[0].car_model}`)
}

module.exports = { carDetailsOfId33 }
