Version: 0.2.0 -- 29 March 2021

Added:
    - Added Routing Capabilities:
        - Added "Add Recipe" to the navigation bar
            - Allows users to create a new recipe that is then added to the database and shown in the feed
        - Added selection tab to the navigation bar where users are shown different foods based on their type (breakfast, lunch, dinner, dessert, miscellaneous, all meals)
            - Different feeds are generated for each selection

    - Added Integration with a Parse Database in the following ways:
        - The application uses two Parse classes: Users and Recipes.
            - User Class:
                - contains username, password, email
                - Users can have many recipes attributed to them, and each recipe has a pointer to which user created it
                - In the next feature, we will implement a system where after signing in, any recipes created will automatically be attributed to that specific user
            - Recipe Class:
                - Contains all the recipes in the "book" and their attributes
                - Added a "description" field to the recipe class to allow users to understand a recipe at a very quick glance at the Recipe Card
                - Can be modified using the Add Recipe Form

        - The application loads the data from Parse when routed to any of our feed pages
        - The application allows for users to add new recipes through a Parse Recipe Model that connects to the Recipe Class

    - Added additional Components: Add, Category, Home, AddRecipe, AddRecipeForm, CategoryFeed, Feed

Changed:
    - Changed the design of the application. We are now using react-bootstrap for styling
    - Instead of having the pictures be uploaded and then retrieved locally, the pictures are now sourced from internet jpeg files. If a user wishes to create a recipe, they should input the image URL now rather than the image's local path.
    - We are no longer using a json file as our database
    - Uploading photos from a url rather than local file path
    - Changed the navigation component to include: Home, drop down of recipe types, and add recipe page. Updated the styling as well
    - Changed App.js to use routing 
    - Changed RecipeCard to use built-in card styling and capabilites from the webpack


Fixed:
    - Pass events up from child components

Version 0.1.0 -- 15 March 2021

Added:
    - Beginnings of a react app without webpack
    - The application uses preact with fragment strings, as JSX would not work without webpack
    - Home feed shows recipes that are retrieved from a local json file using axios


