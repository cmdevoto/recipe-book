Version: 0.2.0 -- 29 March 2021

Added:
    - Added Routing Capabilities:
        - Added "Add Recipe" to the navigation bar
            - Allows users to create a new recipe that is then added to the database and shown in the feed
        - Added selection tab to the navigation bar where users are shown different foods based on their type (breakfast, lunch, dinner, dessert, miscellaneous, all meals)
            - Different feeds are generated for each selection
    - Added Integration with a Parse Database in the following ways:
        - The application uses two Parse classes: Users and Recipes.
            - User class contains username, password, email
            - Users can have many recipes attributed to them, and each recipe has a pointer to which user created it
        - In the next feature, we will implement a system where after signing in, any recipes created will automatically be attributed to that specific user
        - The application loads the data from Parse when routed to any of our feed pages
        - The application allows for users to add new recipes through a Parse Recipe Model that connects to the Recipe Class
    - Added a "description" field to the recipe class
        - Allows users to understand a recipe at a very quick glance
Changed:
    - Changed the design of the application. We are now using react-bootstrap for styling
    - Instead of having the pictures be uploaded and then retrieved locally, the pictures are now sourced from internet jpeg files. If a user wishes to create a recipe, they should input the image URL now rather than the image's local path.
    - We are no longer using a json file as our database

Fixed:


Version 0.1.0 -- 15 March 2021

Added:
    - Beginnings of a react app without webpack
    - The application uses preact with fragment strings, as JSX would not work without webpack
    - Home feed shows recipes that are retrieved from a local json file

Changed:

Fixed: