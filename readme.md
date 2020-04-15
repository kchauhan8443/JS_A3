# Assignment 3

## Purpose

This vanilla JavaScript web app displays various daily menus which can be viewed by clicking either the next or previous buttons.  

![Image of app](app.JPG)

## Concepts Learned

To create this "Bun on the Run" menu app the following JavaScript concepts were used:

- variables let vs const  to change my current Index value

- const nextmenu = document.getElementById('next'); to select my next button from html

- const prevmenu = document.getElementById('prev'); to select my previous button from html

- const h2 = document.querySelector('h2'); to be able to edit the h2 html text with javascript

-const h1 = document.querySelector('h1'); to be able to edit my h1 html text with javascript

-const soupTitle = document.getElementById('soupTitle');   to be able to edit the soup name from html with javascript

const soupPrice = document.getElementById('soupPrice');    to be able to edit the soup price from html with javascript

const saladTitle = document.getElementById('saladTitle');    to be able to edit the salad name from html with javascript

const saladPrice = document.getElementById('saladPrice');    to be able to edit the salad price from html with javascript

const lighterFareTitle = document.getElementById('lighterFareTitle');     to be able to edit the lightfare name from html with javascript

const lighterFarePrice = document.getElementById('lighterFarePrice');   to be able to edit the lightfare price from html with javascript

const entreeTitle = document.getElementById('entreeTitle');    to be able to edit the entree name from html with javascript

const entreePrice = document.getElementById('entreePrice');    to be able to edit the entree price from html with javascript

## How I made the web app

1. First I defined a const called menus and assigned it to be an empty array
    ```js
    const menu = []
    ```
    The reason why I did that is because the menus array will eventually be assigned an array of objects where each object represents a daily menu, complete with menu items and prices.

1. Next I ___defined const currentIndex and assigned it to be 0 ______
    ```js
    let currentIndex = 0;
    ```
    The reason why I did that is because _____To make the the array key editable
    

1. Next I defined ___const h2______
    ```js
    const h2 = document.querySelector("#menu h2");
    ```
    The reason why I did that is because ___my dom____ to edit the menu title that is my array in the html title 

1. Next I defined a ____function display___ to display all today menu from my array
    ```js

    function  display(){
	


h2.textContent = menu[currentIndex].title;
	
h1.textContent = menu[currentIndex].title;

soupTitle.textContent = menu[currentIndex].soup.title;

soupPrice.textContent = menu[currentIndex].soup.price;

saladTitle.textContent = menu[currentIndex].salad.title;

saladPrice.textContent = menu[currentIndex].salad.price;

lighterFareTitle.textContent = menu[currentIndex].lighterFare.title;

lighterFarePrice.textContent = menu[currentIndex].lighterFare.price;

entreeTitle.textContent = menu[currentIndex].entree.title;

entreePrice.textContent = menu[currentIndex].entree.price;

}

    ```
    This function displays the current menu.  For exammple, it displays the menu title by ________________________________

1. Next I defined a function called getMenu which will fetch our menus data in JSON format
    ```js
    async function getMenu() {
	
	const res = await fetch('https://gist.githubusercontent.com/Feezybellz/10c25fbfa62f36d34dfec1ec6fc1b445/raw/63d6bef4da37700dc87b85333978c77d10152122/menu.json');
	const data = await res.json;
	menu.push(...data);
	
	 display();
	}

    ```,
    First I defined a constant called res which will be assigned _ await fetch(url)___to load the json file
 
    Next I defined a const called data which is assigned __await fetch res.json()___to get the data from the loaded json file___.

    Next I inserted that entire array of objects into our menu array by _____pushing is with spread operator_____.  

    Next I called the function display to display our current menu passing in the argument of our first menu in our array

1.  Next I defined a function called prev which takes no parameter but decrements our currentIndex by 1 then calls our display function
    ```js
    function prev(){

	if(currentIndex === menu.length -5){
		currentIndex = 4;
		}else{
currentIndex -= 1;
}
    ```
    The reason I'm manipulating the value of currentIndex is __that when it increases it fetch the data from the  next array ___

1.  In similar fashion, I also created a function called next with similar logic.
    ```js
    function next(){
	
	if(currentIndex === menu.length -1){
		currentIndex = 0;
		}else{
currentIndex += 1;
}
    ```

1.  Next I added some click event listeners to both next and previous buttons
    ```js
    prevmenu.addEventListener("click", prev);
    nextmenu.addEventListener("click", next);
    ```
    The reason for adding click event handlers is so that __when the buttons are clicked it perfotms the function next or prev___

1.  Finally, I _____call my getMenu function to display my arrays__ values
    ```js
    getMenu();
    ```

# Reflection
## What is the hardest part of creating this web app?
- I found JSON part difficult in this project.

## What remaining JS concepts are still kind of foggy?
- I feel like I am still struggling with JSON.

## Deck of cards API (remnant of Assignment 4)
Given the documentation listed here: https://deckofcardsapi.com/ it lists 2 APIs/REST endpoints `Shuffle the Cards` and `Draw a card`.  What would you need to do to draw 1 card?
- ________________________________________

