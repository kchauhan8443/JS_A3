const menu = [
  {
    "title": "Menu 1",
    "soup": {"title" : "Minestrone", "price": "2.85",},
    "salad": {"title": "Greek", "price": "4.50",},
    "lighterFare": {"title" : "Vegetable Biryani", "price": "5.00",},
    "entree":{"title": "Breaded Chicken on a Bun", "price": "6.00",},
  },
  {
    "title": "Menu 2",
    "soup": {"title":"Red Lentil Dal", "price": "3.95",},
    "salad":{"title": "Julienne", "price": "3.75",},
    "lighterFare": {"title":  "Madras Chicken Salad Wrap",
    "price": "5.95",},
    "entree": {"title": "Fish & Chips","price": "6.50",},
  },
  {
    "title": "Menu 3",
    "soup": {"title":  "Spicy Squash & Pumpkin", "price": "3.00",},
    "salad":{"title":  "Mediterranean", "price": "3.95",},
    "lighterFare": {"title": "Ham & Cheese Panini","price": "5.25",},
    "entree": {"title":  "Butter Chicken with Rice Pilaf", "price": "6.25",},
  },
  {
    "title": "Menu 4",
    "soup": {"title":  "Clam Chowder", "price": "3.25",},
    "salad": {"title":  "Israeli Couscous & Feta","price": "4.75",},
    "lighterFare": {"title":  "Pulled Pork on a Bun", "price": "5.25",},
    "entree": {"title":  "Matar Paneer & Basmati Rice", "price": "6.50",},
  },
  {
    "title": "Menu 5",
    "soup": {"title":  "Tomato", "price": "2.95",},
    "salad": {"title":  "Caesar", "price": "4.75",},
    "lighterFare": {"title":  "Burger & Fries", "price": "4.95",},
    "entree": {"title":  "Beef & Broccoli with Fried Rice", "price": "5.95",},
  }
];


let pageMenu = 0;

const nextmenu = document.getElementById('next');

const prevmenu = document.getElementById('prev');


function displayMenuCon(){
const h1 = document.querySelector('h1');
h1.textContent = menu[pageMenu].title;

const soupTitle = document.getElementById('soupTitle');
soupTitle.textContent = menu[pageMenu].soup.title;

const soupPrice = document.getElementById('soupPrice');
soupPrice.textContent = menu[pageMenu].soup.price;

const saladTitle = document.getElementById('saladTitle');
saladTitle.textContent = menu[pageMenu].salad.title;

const saladPrice = document.getElementById('saladPrice');
saladPrice.textContent = menu[pageMenu].salad.price;

const lighterFareTitle = document.getElementById('lighterFareTitle');
lighterFareTitle.textContent = menu[pageMenu].lighterFare.title;

const lighterFarePrice = document.getElementById('lighterFarePrice');
lighterFarePrice.textContent = menu[pageMenu].lighterFare.price;

const entreeTitle = document.getElementById('entreeTitle');
entreeTitle.textContent = menu[pageMenu].entree.title;

const entreePrice = document.getElementById('entreePrice');
entreePrice.textContent = menu[pageMenu].entree.price;




}


function displayMenuNav(){
const h2 = document.querySelector('h2');

h2.textContent = menu[pageMenu].title;
}

displayMenuNav();
displayMenuCon();

function next(){
	
	if(pageMenu === menu.length -1){
		pageMenu = 0;
		}else{
pageMenu += 1;
}
displayMenuNav();
displayMenuCon();
}

function prev(){
	
	if(pageMenu === menu.length -5){
		pageMenu = 4;
		}else{
pageMenu -= 1;
}
displayMenuNav();
displayMenuCon();
}


prevmenu.addEventListener('click', prev);
nextmenu.addEventListener('click', next);


// STEP 1 - Define your page variable

// STEP 2 - Define all your querySelector variables that you'll need to display all info.
// Consider using embedded objects that allows you use salad.title and salad.price to access the DOM elements

// STEP 3 - Define a function called display that accepts a parameter called todaysmenu (Which is an object)
// The function will display all prices and menu items based off of todaysmenu via your querySelector variables defined above

// STEP 4 - Create a function called next, that will increment your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page variable

// STEP 5 - Create a function called previous, that will decrement your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page varibale

// STEP 6 - Ensure that you cover the potential bug of your functions next/prev being called multiple times
// which will eventually move the page value outside the bounds of your array.  Fix that.

// STEP 7 - Add click event listeners to both arrow buttons calling the appropriate function.

// STEP 8 - Almost done, but why doesn't the info display right away upon page load?  Fix it.
