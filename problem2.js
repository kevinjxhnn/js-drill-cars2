const inventory = require("./inventoryData")

// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"

function infoOnTheLastCar(inventory){
    let size = inventory.length;
    
    const filteredItem = inventory.filter(item => {
        return item.id == 50
    })

    console.log(`Last car is a ${filteredItem[0].car_make} ${filteredItem[0].car_model}`)
}

module.exports = { infoOnTheLastCar }



