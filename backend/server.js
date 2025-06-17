
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


 if (!isNaN(maxPrice)) {
        var filteredMenu = menu.filter(function(menuItem) {
            return menuItem.price <= maxPrice; // gives back item with the same price or lower
        });
        response.json(filteredMenu);
    } else {
        response.json(menu); // shows the menu again if no price is given 
    }
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
    var reservation = request.body; 

    
    if (!reservation.name || !reservation.date || !reservation.time) {
        response.status(400).json({ error: "Missing name, date, or time" });
        return; // Stop execution
    }

    
    response.status(201).json({
        message: reservation.name + ", thank you for reserving at Chef Marco’s Restaurant on " +
                 reservation.date + " at " + reservation.time + "! Your reservation is confirmed."
    });
});


// Protected route for Chef Marco's secret recipe
app.get("/chef/secret-recipe", verifyChefRole, function (request, response) {
    response.json({
        recipeName: "Chef Marco’s Legendary Marinara",
        ingredients: ["San Marzano tomatoes", "Olive oil", "Garlic", "Fresh basil", "Parmesan", "Red wine"],
        instructions: "Blend tomatoes, sauté garlic in olive oil, simmer with red wine, stir in Parmesan, add fresh basil. Serve "
    });
});


//  Middleware
app.use(function (request, response, next) {
    var timestamp = new Date().toISOString(); // turns timestamp to a string
    console.log(`[${timestamp}] ${request.method} ${request.url}`);
    next(); 
});







app.listen(8080, function () {

    console.log("Server is listening on 8080");
});




