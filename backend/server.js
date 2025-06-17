
const express = require("express"); // Import express
const app = express(); //Instantiate a new instance of express



//Menu in Global Scope 
const menu = [
    {
        id: 1,
        dish: "Baked Shrimp Scampi",
        price: 20
    },
    {
        id: 2,
        dish: "Chicken Parmigiana",
        price: 14
    },
    {
        id: 3,
        dish: "Margherita Pizza",
        price: 17
    },
    {
        id: 4,
        dish: "Penne with Vodka Sauce",
        price: 18
    }
]



// Root route
app.get("/", function (request, response) {

    // Send back to the client "Welcome to Chef Marco's Italian Bistro!"
    response.send("Welcome to Chef Marco's Italian Bistro!").end();
});


// Menu route
app.get("/menu", function (request, response) {
    response.json(menu);

});

// Menu Item route
app.get("/menu/:menuItem", function (request, response) {
    var menuItemId = parseInt(request.params.menuItem); // Convert the ID from string to number
    var item = menu.find(function (menuItem) {
        return menuItem.id === menuItemId;
    });

    if (item) {
        response.json(item); // Send the requested menu item
    } else {
        response.status(404).json({ error: "Menu item not found" });
    }
});

// Reservation route

app.post("/reservations", function (request, response) {

    response.status(501).json({
        error: "Reservations functionality is not added yet."

    });


});





//Tell the express app that you want it to listen on port 8080 of your computer
app.listen(8080, function () {

    //This function gets executed when the app starts listening
    console.log("Server is listening on 8080");
});




