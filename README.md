# PHOTOLAND ✨

To View the web app click [DEMOLINK &rarr;](https://vladislav-burhovetskiy.github.io/photoland/)

Photoland is Photo Cameras E-Commerce Web App based on React.js | React Router 6.
Fully responsive for 5 types of screen sizes from mobiles and tablets to a large desktop.

## The project's functionality:

1. Promotions and new products display page:
    - this is the main page that is displayed by default;
    - discounts that can be used in the shopping cart when ordering;
    - the discounts page is available only to logged-in users;

2. Product details page:
    - detailed information about the product;
    - possibility to add the product to the shopping cart;
    - similar goods in this category;
    - the ability to return to the previous page;

3. Navigation, search and filter:
    - navigation by product categories;
    - search by product brand name;
    - filter by product price;
    - pagination if there are more than 6 products on the page;

4. Login / logout:
    - an empty form causes a shake and does not allow sending data;
    - the button becomes disabled when less than 3x and more than 16 characters;
    - the avatar is replaced by the username;
    - if the name is longer than 9 characters, the last characters are replaced by "...";
    - the login button is replaced by logout;
    - login | logout is made using LocalStorage;
    - logout immediately redirects to the login form page;

5. The shopping cart:
    - if there is no product, an empty cart is displayed;
    - if the product is available, the total amount is displayed, the possibility to clear the basket and order the product;
    - when clicking on the order, the user sees a modal window about the success of the order, when closing it, the shopping cart is cleared and closed;
    - if the user is not logged in, he will see a modal window about the need to log in before ordering;
    - you can also increase and decrease the quantity of the product, see the total amount of one product, delete the product or go to the detailed information of this product;
    - the total amount of goods is displayed on the cart icon;
    - all information about products in the cart is stored in LocalStorage;

6. Page 404 for non-existent routes:
    - one 404 page implemented in project routes;
    - second 404.html page added specifically for GitHub deployment as they use their 404 page by default;

7. Unit-testing Jest & react testing library:
    - adding the product to the cart;
    - decrease and increase in the quantity of goods;
    - updating the total amount of the product;


## Quick start:

```
$ npm install
$ npm run dev
```

P.S. Use node version >= 18. 
Check the current version: node -v

##
### Happy Coding!
