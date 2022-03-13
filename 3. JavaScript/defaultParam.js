// Default Paramters.
// You can use default value if value is not passed.
// Total Price = Cost of food + delivery charges+ taxes.

function calculateTotalPrice(costOfFood, Taxes, deliveryCharges=10){
    const result = costOfFood+deliveryCharges+Taxes;
    console.log(result);
}

// general membership.
calculateTotalPrice(400, 20, 30);

// pro membership.
calculateTotalPrice(400, 20, 50);
