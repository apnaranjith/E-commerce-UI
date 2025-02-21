Project title:React E-Commerce Shopping Cart UI
Objective: To Develop a functional and responsive ecommerce UI with features like product
listing, filtering, search, and add-to-cart using React JS , CSS.

Folder structure:
components/ → Reusable UI elements (Navbar, ProductCard, Filters, SearchBar, etc.).
pages/ → Main pages of the app (Home, CartPage).
Context/ → Context API for managing the cart state (CartContext.js).
utils/ → Utility functions like dataFetch.js for API handling.
styles/ → Organized stylesheets for different components.
public/assets/ → Stores static images and assets.

Tech stack:
React.js – Frontend framework
CSS – Styling
React Router – Navigation
Context API – State management for the cart
localStorage – Cart persistence
Fetch API – Fetching product data

To run the application:

 Clone the Repository
Open a terminal and run:


git clone https://github.com/your-username/E-commerce-UI.git
(Replace your-username with your actual GitHub username.)

2️⃣ Navigate to the Project Folder
cd E-commerce-UI

3️⃣ Install Dependencies
Make sure you have Node.js installed, then run:
npm install

4️⃣ Start the Development Server
Run the following command to start the React app:
npm start
This will launch the application at http://localhost:3000/ in your default browser.

🔧 Build for Production
To create an optimized production build, run:

npm run build
This generates the minified files in the build/ folder.



List of components and their functionalities:
1.ProductList.js:
Objective:
The ProductList.js component is responsible for fetching and displaying a list of products. It serves as the central component for managing product data and rendering product cards dynamically.

Description:
Fetches product data: On component mount, it retrieves product data from an external API (catalogue.json).
Manages state: It maintains two states:
products: Stores the complete product list.
filteredProducts: Holds the filtered version of the products for dynamic updates.
Renders product cards: Iterates over filteredProducts and passes each product as a prop to the ProductCard component for display.
This component is essential for dynamically loading and displaying product details within the shopping interface. 🚀


2.ProductCard.js
Objective:
The ProductCard.js component is responsible for displaying individual product details and allowing users to add products to the cart while ensuring stock limitations are enforced.

Description:
Displays product details: Renders the product image, name, and price.
Checks cart status: Retrieves cart data from the CartContext and checks if the product is already in the cart.
Handles stock limitations:
If the product is out of stock (quantity === 0), the "Add to Cart" button is disabled and shows "Out of Stock".
If the product is in stock, the button dynamically updates to show the current quantity of the product in the cart.
Adds product to cart: Calls the addToCart function from the CartContext when the button is clicked.
This component ensures a smooth user experience by preventing over-purchasing and providing real-time cart updates. 🛒✨

3.Navbar.js
Objective:
The Navbar.js component provides navigation links for easy access to the product listing page and the shopping cart.

Description:
Navigation bar: Displays links for navigating between the Products page and the Cart page.
Uses React Router: Utilizes the Link component from react-router-dom to enable client-side navigation without reloading the page.
User-friendly navigation: Ensures seamless movement between different sections of the eCommerce application.
This component serves as the primary navigation hub for users, enhancing accessibility and usability. 🚀


4.SearchBar.js
Objective:
The SearchBar.js component enables users to search for products dynamically based on name, color, or type.

Description:
State Management: Uses the useState hook to manage the search query entered by the user.
Dynamic Filtering: Filters the products list based on the search query and updates setFilteredProducts.
Case-Insensitive Search: Converts search queries and product attributes to lowercase for accurate matching.
Real-Time Updates: Triggers filtering on every input change to instantly refine the product list.
User-Friendly Interface: Includes a text input field with a placeholder to guide users.
This component enhances usability by allowing customers to quickly find desired products with ease. 🔍✨


5.Cart.js
Objective:
The Cart.js component manages the shopping cart functionality, allowing users to view, update, and remove products.

Description:
State Management: Uses the useCart context to access cart, updateQuantity, removeItem, and cartCount.
Dynamic Cart Display:
If the cart is empty, it displays a "Your cart is empty" message.
Otherwise, it lists all added products with their details.
Product Information: Shows name, image, and price of each cart item.
Quantity Controls:
Allows users to increase or decrease the product quantity using + and - buttons.
Prevents quantity from going below 1.
Remove Button: Enables users to remove an item from the cart entirely.
Cart Count: Displays the total number of items in the cart (cartCount) in the header.
This component ensures a smooth and user-friendly shopping cart experience, providing real-time updates and efficient management of selected products. 🛒✨


6.CartIcon.js


Objective:
The CartIcon.js component serves as a visual representation of the shopping cart, displaying the number of items in the cart and providing a navigation link to the cart page.

Description:
Cart Count Display:
Retrieves the total number of items in the cart using cartCount from the useCart context.
If cartCount > 0, it shows a cart badge with the total item count.
Navigation to Cart Page:
Wraps the cart icon (🛒) inside a <Link> to navigate users to the /cart page.
Animation Effect:
Uses a useState hook (animated) to trigger a bounce animation when the cart count updates.
The animation resets after 500ms using setTimeout().
The effect runs inside a useEffect hook, ensuring it triggers only when cartCount changes.
This component enhances user experience by providing real-time cart updates and a subtle visual cue whenever items are added to the cart. 


7.Filters.js
Objective:
The Filters.js component enables users to refine product listings based on gender, color, type, and price range. It dynamically updates the displayed products based on selected filter criteria.

Description:
State Management (useState):
Manages filter selections for gender, color, type, and price range using the filters state.
Filtering Logic (handleFilterChange):
Dropdowns (select) for gender, color, and type allow users to select a category.
Checkboxes (input[type="checkbox"]) for price range enable multiple selections.
When a filter changes, the component dynamically updates the filtered product list.
Filtering Process:
Filters the product list based on selected criteria.
Uses .filter() to match gender, color, and type.
Handles price range filtering by checking if the product price falls within any selected range.
Real-time Updates:
Calls setFilteredProducts(filtered) to immediately update the product list when a filter is applied.
This component enhances the user experience by allowing seamless product discovery through multiple filtering options. 🏷️✨



8.CartContext.js
Objective:
The CartContext.js component provides a global state management system for handling cart operations using React Context API. It ensures persistent cart data and enables functions for adding, updating, and removing items while syncing with localStorage.

Description:
Context API (createContext):
Creates a shared cart state that can be accessed anywhere in the application.
State Management (useState):
Initializes the cart by retrieving saved data from localStorage to persist cart items across sessions.
Effect Hook (useEffect):
Automatically saves the cart to localStorage whenever it changes.
Cart Functions:
addToCart(product): Adds an item to the cart or updates its quantity if it already exists.
updateQuantity(productId, newQuantity): Updates item quantity while preventing negative values.
removeItem(productId): Removes an item from the cart.
cartCount: Computes the total number of items in the cart.
getCartTotal(): Calculates the total price of all items in the cart.
Context Provider (CartProvider):
Wraps the entire application, allowing child components to access and modify cart data.
This component enhances the shopping experience by ensuring seamless cart operations and data persistence. 🛒✨


9.CartPage.js
Objective:
The CartPage.js component is responsible for displaying the shopping cart, allowing users to view, update, and remove items, and calculating the total price dynamically.

Description:
State Management (useState):
Stores input values for quantity fields to provide a better user experience.
Effect Hook (useEffect):
Synchronizes input values with the cart data to reflect updates.
Key Features:
Show cart items: Displays the product name, price, and quantity.
Modify item quantity:
Users can manually change the item quantity using an input field.
Prevents invalid values (e.g., negative numbers or empty input).
Remove items from cart: Allows users to delete products with a button.
Calculate total price: Computes the sum of all items dynamically.
Handles empty cart cases: Displays a message when no items are present.
This component ensures a smooth shopping cart experience, with real-time updates and a user-friendly interface. 🛒✨

10.Home.js
Objective:
The Home.js component serves as the main product listing page, integrating product fetching, filtering, searching, and cart management.

Description:
State Management (useState):
Stores fetched products and filtered products separately for better performance.
Effect Hook (useEffect):
Fetches product data from an external source (fetchProducts()).
Initializes both all products and filtered products upon load.
Key Features:
Search & Filter Integration:
Uses the SearchBar and Filters components to refine displayed products dynamically.
Product Display:
Maps through the filtered product list and renders ProductCard for each item.
Cart Management:
Retrieves addToCart from the Cart Context, allowing products to be added to the cart.
This component acts as the homepage of the eCommerce UI, providing a smooth and interactive shopping experience by combining search, filtering, and cart functionality. 🛍️✨



11.dataFetch.js:
Objective:
The dataFetch.js utility provides a centralized function to fetch product data from the external API.

Description:
API Endpoint:
The API_URL points to the product catalog JSON data.
fetchProducts() Function:
Uses fetch() to retrieve product data asynchronously.
Implements error handling:
Logs errors to the console if the request fails.
Returns an empty array to prevent crashes in the app.
This utility function ensures a consistent and reusable approach for fetching product data throughout the application. 🚀













