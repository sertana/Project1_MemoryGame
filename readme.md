######Sanjaya's Memory Game####

#What is the game about?#

The game requires a player to remember where cards of different colors are located.

The colors will be revealed when player clicks on individual cards.

If the colors match the two cards will disappear.

If the colors do not match, the cards will go back to its original color in quarter second.

Once players has the colors revealed, player needs to use his own strategy to reveal and match cards till all cards disappear.

The player gets 18 clicks to finish the game, otherwise the players loses and the game is reset again.

#What features did it include?#

The board was created in HTML.

The board and the all the cards are divs.

Flexbox was used to size and position the cards.

Various function were created and called upon when cards are clicked.

The click counter counts the number of clicks and lets the player know how many clicks they have used.

SetTimeout, shuffling an existing array to generate random array and checking for matching colors are the main feature of the javascript.

#Were there any particular pain points or unsolved problems you had to manage? (e.g. technological, timing, content, etc.)#

The biggest issue was to create associate random colors to the cards everytime a new game was played.

Instead of using individual click function on each card, I wanted to use one click event and associate it with all the cards. However, that approach did not work for me because I was not able to associate different colors in different clicks.

I had started out with 20 cards. However since code were being repeated on each card, I decided to cut the board in 10 cards.

The cards do disappear if player clicks on it twice. However that approach of playing won't allow the player to win because it takes 20 clicks to win.

If I did not use a setTimeout function, player would not see the second card if colors did not match. This would be a more challenging to the player's memory. A more tedious and careful strategy would have to used win in 18 clicks and under.

#Is there any other information you think might help us understand what you've built?#

This is a different approach to a memory game. Most memory games reveal the cards for a short period of time before flipping over. This game does not reveal the colors on load. Player has to reveal the cards and keep the colors in their memory.

I think the game can be made more difficult if the colors would include different shades of the same parent color. (e.g different shades of green or blue etc.)

#List the technologies used#

HTML, CSS, Flexbox, Javascript, JQuery

#Describe the approach taken#

Instead of rendering the board from Javascript, I created the board using HTML and CSS.

The next was to create and array and generate a randomized new array of that array. The array would contain the five colors that will appear on the board. The random array would put different colors on cards when a new game is played.

The next step was to execute events that would happen when an individual card was clicked.

    * When a card is clicked, first it checks if the clicks count is 18.
    * If click count is 18, it displays the game lost alert.
    * If click count is less than 18,  adds 1 to the click count and then it reveals the color of the card.
    * It puts the color of the card in an array, and also the card in an array.
    * It checks to see if the card array has two elements.
    * If the card array has two elements, then it checks to see if the two colors in the color array is the same.
    * If the two colors are same, the respective cards will have an opacity of zero.
    * If the two colors are not the same, the cards will turn back to its original color after a slight delay.
    * If all cards disappear, a win message is alerted.
