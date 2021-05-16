# What the FORK Is for Dinner?!

A [Front-End Project](https://frontend.turing.io/projects/whats-cookin.html) by [Nikki Petersen](https://github.com/piknikki), [Katie B](https://github.com/knees4bees) and [Jessica Justice](https://github.com/m1073496)

[Explore the app](https://what-the-fork-is-for-dinner.netlify.app/)


1. [Overview](#overview)
2. [Planning Resources](#planning-resources)
3. [DEMO](#demo)
4. [Learning Goals](#learning-goals)
5. [Technologies](#technologies)
6. [Features](#features)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Future Additions](#future-additions)


## Overview

This is a Turing School of Software and Design - Module 2 group project.

What the FORK Is for Dinner?! began as a bare-bones starter kit. Over the course of this project, we built out the HTML structure, CSS Grid styling & responsive design, and JavaScript functionality from scratch. The project now has three class files, `Recipe.js`, `RecipeRepository.js` & `User.js`, that were each built via test-driven development. The app itself hosts a number of recipe objects, displayed to the user and made interactive. Users can navigate through the app, search for recipes to either favorite or add to their lists to cook for the week, take a look at the ingredients in their pantry, or simply browse for recipe information.

## Planning Resources

* [Trello Project Board](https://trello.com/b/BqKP6hlD/whats-cooking-pair-project)
* [Balsamic Wireframes](https://balsamiq.cloud/s76d3gm/pr1wc9d/r2278)


## DEMO

### To demo this app, we recommend generating the user `Earline Von`. 
An instance of this user has been left in the `src/scripts.js` file for convenience. We recommend using her to check that the appropriate messages and ingredient counts are being displayed throughout the app. 

This user has enough ingredients in her pantry to make the following recipes:
* Loaded Chocolate Chip Pudding Cupcakes
* Elvis Pancakes
* Ambrosia Cupcakes
* Pulled Pork

### Open app here: [Netlify Deployment Site](https://what-the-fork-is-for-dinner.netlify.app/)


## Learning Goals

* Practice test-driven development (TDD) best practices
* Use a linter to standardize our code
* Practice writing object-oriented JavaScript classes
* Implement CSS Grid
* Create a responsive design


## Technologies

* HTML
* CSS
* JavaScript
* Git
* GitHub
* ESlint

---
## Features

+ [Landing Page](#landing-page)
+ [View Pantry](#view-pantry)
+ [Search Recipes](#search-recipes)
+ [Recipe Detail View](#recipe-detail-view)
+ [My Favorites List](#my-favorites-list)
+ [All Recipes List](#all-recipes-list)
+ [This Week List](#this-week-list)


## Landing Page

Upon launching the app, the landing page will display the app's ~interactive~ logo and app title that doubles as a home button. On page load, a random user is generated, complete with their own pantry of available ingredients. The landing page will display a greeting to that user, accompanied by an icon that leads to that user's pantry, where those ingredients can be found. Below, the navigation bar gives the user further navigation options:

 * `My Favorites` 
    This link displays a list of the user's favorite recipes (no user has favorite recipes on page load, but they can be added at any time).
 * `All Recipes`
    This link displays a list of all the recipes that the app has to offer (50 in total).
 * `This Week`
    This link displays a list of recipes that the user has chosen to cook that week (no user has weekly recipes on page load, but they can be added at any time).

The landing page also offers the user a search bar and a multi-choice list of categories to filter through all the app's recipes. These filtering options can be used separately or in tandem, and the user can select multiple categories by holding down the `command` button.

Next, the landing page displays a hero image of a featured recipe, accompanied by the title of that recipe as well as a heart icon and a calendar icon. Clicking the heart icon will add that featured recipe to their favorites, while clicking the calendar icon will add it to the user's weekly recipe list. 
Finally, the user will see four other featured recipes.

<img width="600" alt="landing-desktop" src="landing.png">
<img width="350" alt="landing-mobile" src="landing_mobile.png">



## View Pantry

Selecting the user icon or user greeting, both located at the top of the app, will bring the user to their pantry. On this view, a user will see a list of ingredients that they have available to use, as well as their quantities.


![](https://media.giphy.com/media/JzWO5R7K2BYd1dRHiF/giphy.gif)

***GIF INCLUDES DEMO OF INTERACTIVE LOGO STYLING!***


## Search Recipes

When a user makes a search, they will be taken to a list view that displays a list of recipes represented by an image, name, cost and message to the user. This list will only display results that match the user's search and/or filter selections. If no matches are found, a message will relay this result to the user. The search bar persists on this view to offer the user the ability to start a new search from this view. The app title, user greeting & pantry, and navigation bar also persist on this view to provide easy navigation options and better user experience.

![](https://media.giphy.com/media/aO6hy5vAm7j4CIrusP/giphy.gif)


## Recipe Detail View

When the user is viewing a list of recipes, each recipe in that list is clickable. Clicking on an individual recipe will take the user to the Recipe Detail view. This view displays the recipe name, followed by numbered instructions for how to make the recipe on the lefthand side of the page. On the righthand side of this view, the user will see an image of the dish, followed by the total cost of the dishes required ingredients, and a list of the ingredients necessary for making the recipe. If a user does not have enough of a particular ingredient on this list, a message will appear below that ingredient notifying the user of the exact quantity they are missing. 

From this view, a user can select the heart or calendar icons to save this recipe to their list of favorite recipes or their list of recipes to cook that week, respectively. Selecting these icons again will undo this change. The app title, user greeting & pantry, and navigation bar also persist on this view to provide easy navigation options and better user experience.


<img width="800" alt="recipe detail view" src="Screen Shot 2021-02-17 at 7.56.07 PM.png">


## My Favorites List

When a user selects the `My Favorites` link in the navigation bar, they are redirected to a page that displays only those recipes the user has favorited. On this view, selecting any recipe on the list will take the user to the Recipe Detail view to find information about that particular recipe. Recipes that feature a heart icon with red outline indicate that that particular recipe has been favorited by the user. Selecting this icon again will unfavorite that recipe, changing the icon border to its default of black. If the user returns to the `My Favorites` page, they will see that any unfavorited recipes have been removed from the list.


![](https://media.giphy.com/media/Yke0DzclSclG5R1CPu/giphy.gif)


## All Recipes List

The All Recipes list view is displayed when a user selects it's corresponding link in the nav bar or if a search is made with no search terms or category selections. The All Recipes view displays a list of all 50 recipes that the app has to offer. Every recipe on this list is represented by an image of a dish which corresponds to the recipe, as well as the name of the dish, total cost to make the dish, and a message and icon to indicate whether the user has enough ingredients in thier pantry to make that recipe. The search bar is included here to give the user the ability to search through all the recipes on this page as well.

![](https://media.giphy.com/media/D4LbHnDwJk6dZicGrX/giphy.gif)


## This Week List

Selecting the `This Week` link in the navigation bar will bring the user to a list view that displays all the recipes that they have chosen to cook for the week. On this view, selecting any recipe on the list will take the user to the Recipe Detail view to find information about that particular recipe. These recipes are added when a user selects the calendar icon on any given recipe, and removed when the user deselects that calendar icon on the same recipe. When a recipe is on the user's list of recipes to cook, the icon border will be purple, while recipes not on the list will have calendar icons with black borders, their default setting.

![](https://media.giphy.com/media/J40YgicolnjUJedT9Y/giphy.gif)



---
## Challenges

* Font Awesome being Not Awesome --> buggy images/icons
* Working with less-than-ideal data sets
* Correctly targetting click events
* Running out of time to complete everything we wanted to

---
## Wins

* Successfully using Netlify to deploy our app
* Using array iterator methods to comb through multiple layers of information
* Successfully implementing tests for each class
* Working well together! We were so organized!
* Cute, responsive design!

---
## Future Iterations

* Finish building out the `User.js` class and test --> `cookMeal()` method
* Implement the `cookMeal` method on the UI --> bcreate a button element and corresponding functionality to remove used ingredients from a user's pantry when meal is cooked
* Create `back` button to enhance user experience on the app
* Make the featured recipes on the bottom of the landing page clickable
* Add instruction to use command-click for selecting multiple items from dropdown
* Make DOM interactions persist page refresh via local storage
* Wrap recipe name for featured recipes on landing view
* Add ingredient icons or pictures

