UI Inspiration:
https://preview.themeforest.net/item/tourx-travels-tourism-agency-react-template/full_screen_preview/33518725?_ga=2.23044411.1822907360.1636607809-2097356058.1633332460
https://preview.themeforest.net/item/wanderland-travel-blog/full_screen_preview/25400238?_ga=2.247810311.1822907360.1636607809-2097356058.1633332460
https://preview.themeforest.net/item/getaway-an-upbeat-travel-and-tourism-theme/full_screen_preview/20719616?_ga=2.46509223.1822907360.1636607809-2097356058.1633332460

Instructions:
    https://github.com/ProgrammingHero1/tourism-or-delivery-related-website

Client Repository:
https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-nadifalifahim

Server Repository:
https://github.com/programming-hero-web-course1/tourism-or-delivery-website-server-side-nadifalifahim

Logo:
https://www.flaticon.com/free-icon/beach_2907223?term=travel&page=3&position=1&page=3&position=1&related_id=2907223&origin=tag

Task Detail:
Home page will have a header (simple navbar), banner, offerings (services/items/options/plans: the main items that user will purchase), and footer.

Add two extra sections in the home page in addition to the 4 sections mentioned above.

The Offerings will have at least 6 items/services. You can put one or more items/services in a row based on your design. Each service should have a relevant name, image, short description and a purchase button (button could say: book now, buy now, order, etc.).

Clicking on the button will take the user to the place order page. This route will be a private/protected route. Please make sure that if the user is not logged in, the private route redirects to the login page. After login, the user will be redirected to the page he/she wanted to go to. Also, make sure, after reloading the page of a private route, the user is not redirected to the login page.

The Place Order page should display detailed information of the item, user has clicked. It will display users name and email address from the login system and user will provide address and necessary information to place the order/booking/purchase.

Implement at least one (google, facebook, github,or email/ password) authentication. Once a user is logged in, the user name, logout button should appear on the header which will log out the user once clicked. Displaying user profile pic on the header is optional.

If a user is logged in, he/she will see more options like My Orders, Manage All Orders, Add A New Service, Logout. Based on your website idea, you can change the name of these menu items.

On the my orders page, the logged in user will see only his/her orders. If the user wants, he/she should be able to cancel/delete any order. Ask a confirmation message before deleting or canceling an item. Using browser confirmation dialog is ok.

No Fake data (data has to be hosted on the database). database could be mongodb atlas or any other noSQL database.

Bonus:
If you click on the Manage All Orders page, the logged in user will see the orders placed by every users. If multiple users used this website to place orders, everyone's order will be displayed here. and the admin will be able to delete anyone's order here. Also, make sure to add a confirmation before deleting.

On the Add A New Service, the admin will be able to add a brand new service. After adding that service, this service will appear on the home page. The name Add a new service could be changed based on your website. On this page, you can put an input field to put an image url. (For simplicity, you can upload the image to imgbb or other image hosting website and then put the url on the input field)

update: At the time of placing an order, every order will have a default status: pending. On the Manage All Orders page, you will be able to update the status of the pending to approved status. This could be a simple button to update the pending status. (don't over think, this is a simple button to update the status field of an order. Use Id to find the order and set the status to approved)

Meaningful readme.md file containing your website name, a little description, link to your live site. And at least five bullet points mentioning different features and functionality of your website.

Make the website responsive. Make sure the site looks different on desktop and mobile responsive. Tablet responsive is optional

Make the website meaningful and consistent in look and feel. Give your website a relevant name. Images and all the content of the website has to be relevant. No lorem ipsum please.
Clean and organized Code. Organize components and add comments when needed

Add a loading spinner on the home page, if data is loading a spinner will be displayed.

use .env file to hide db user and password and also use .gitignore file