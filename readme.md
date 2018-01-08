# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game :space_invader:

![](https://media.giphy.com/media/TLKKExVa9v8bu/giphy.gif)

## Overview

Let's start out with something fun - a game!

Everyone will get a chance to be creative, and work through some really tough programming challenges - it's up to you to use what you've learned to come up with a fun and interesting game.

As part of this project, you'll be required to create a project presentation that you will use to present your work at the end of project week. Your goal for this presentation is to extract the most important aspects of what went into building your project into easy-to-use language and practice speaking and presenting about your code.

Show us what you've got!

---

## Requirements

Your project has 3 required parts: the app, a README markdown file, and a presentation

#### Constraints :no_entry_sign::

* Collision detection games are NOT allowed

  **_Note:_**

  > If you are super set on doing a collision game, you may petition to do one. This petition involves either a working collision example that you have previously made OR an **in depth**, **highly technical** written statement explaining the collision logic you plan on using.

* HTML Canvas based games are NOT allowed

#### Requirements :computer::

* Your app must have two 'pages', that is, full-screen views: - Landing page: - With the name of your game, instructions, and a start button that leads to the Game page - Game page: - Should contain the actual game
* Use DOM manipulation - either vanilla or jQuery
* Deploy your game online to GitHub pages - _(We will be going over how to do this later this week)_
* A git repository hosted on GitHub, with a link to your hosted game (_A link to your hosted working game in the URL section of your GitHub repo_), and frequent commits dating back to the very beginning of the project
* Style your landing page and game page with class-based external CSS file

* Comment your code appropriately
* Format your source code using JS-Prettier! REALLY!
* At the top of your repo, include a README.md (see below for README.md requirements)

_Note_

> If you're creating a two (or more)-player game, you must allow players to take turns and design logic for winning & visually display which player won

#### README Requirements

* Answer the following questions:

  * What is the game about?
    The game requires a player to remember where cards of different colors are located.

  The colors will be revealed when you click on it.

  If the colors match the two cards will disappear.

  If the colors do not match, the cards will go to its original color in quarter second.

  Once you have the colors revealed, player needs to use his own strategy to reveal and match cards till all cards disappear.

  The player gets 18 clicks to finish the game, otherwise the players loses and the game is reset gain.

  * What features did it include?
    The board was created in HTML.

  The board and the all the cards are divs.

  Flexbox was used to size and position the cards.

Various function were created and called upon when cards are clicked.

The click counter counts the number of clicks and lets the player know how many clicks they have used.

SetTimeout, shuffling an existing array to generate random array and checking for matching colors are the main feature of the javascript.

* Were there any particular pain points or unsolved problems you had to manage? (e.g. technological, timing, content, etc.)
* Is there any other information you think might help us understand what you've built?

- List the technologies used
- Describe the approach taken

In addition, you can use the README to provide any other useful information about your app.

#### Your presentation will consist of :speech_balloon::

* **5 minutes:** A presentation deck _- Google Slides, Keynote, PowerPoint_
  * At least 5 slides
  * Use easy-to-understand language and avoid too much "technical" terminology
  * Answer the following questions:
    * What is the game about?
    * What features did it include?
    * Were there any particular pain points or unsolved problems you had to manage? (e.g. technological, timing, content, etc.)
    * Is there any other information you think might help us understand what you've built?
* **2 minutes:** A demo of your game
  * Show the functionality of your game!

**_Note_**</br>

> We **will** cut you off after the given amounts of time. Likewise if you are _way_ under your time, we **will** tell you to stand there until your time is done, so don't skimp out. Plan your presentation accordingly. Practice it!

#### Bonus :tada::

* Include a animation using SVG
* Include a "Tutorial Section"
* Use a form to collect information about the user on the landing and display that information on the game page

## Suggested Ways to Get Started :checkered_flag:

* Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* Use your Chrome Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
* Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know... _procrastinating_.
* Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
* Consult documentation resources (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
* Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

---

## Strongly Suggested Project Ideas :bulb:

#### Beginner

* Simon
* War - Two Player
* Self-scoring Trivia
* Memory

#### Medium

* Text Adventure
* War - Two Player
* Sorry! - Multiple Players
* Yahtzee - Two Players
* Black Jack - with Computer AI

#### Advanced

* Battleship - Two Player
* Checkers - Two Players
* Connect 4 - Two Player
* Missile Command - Level Progression

---

## Project Submission :mailbox_with_mail:

Projects will be due **Tuesday January 9**. To submit your project, create an issue on this repository including:

* A link to the project repo on Github
* A link to the deployed game

You will be presenting your project **Tuesday January 9**. Be prepared to talk about your project and remember to follow the rules in the requirements section!

---

## Useful Resources :link:

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**
* **[GitHub Pages](https://pages.github.com)** _(for hosting your game)_
* **[Mastering Markdown](https://guides.github.com/features/mastering-markdown/)** _(for your README.md file)_
* **[:dizzy:EMOJIS:star2:](https://www.webpagefx.com/tools/emoji-cheat-sheet/)** _(for really awesome README.md files)_

---

## Project Proposals - Due Tonight 9/12 at 11:00 PM! :calendar:

All proposals should be in the form of an issue attached to this repository.

#### Your proposal must include:

* Name of the game
* Rules
* Your MVP [_(minimum viable product)_](https://www.devbridge.com/articles/4-steps-to-defining-a-minimum-viable-product/) for this project
* Reach Goals
* Foreseen challenges or obstacles
* A timeline for your work, providing clear and concise objectives for every day up to the project deadline
* Technology you intend to use
* A link to your repo!

---

### Most Importantly:

# :dizzy::sparkles: HAVE FUN WITH IT! :sparkles::dizzy:
