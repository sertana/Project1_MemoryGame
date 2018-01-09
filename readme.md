#Sanjaya's Memory Game

###What is the game about?

The game is about testing a player's memory.

The game requires a player to remember where different colored cards are located.

The colors are revealed when player clicks on individual cards.

If player picks two cards of the same color, the cards will disappear.

If player picks two cards of different colors, the cards will return to its original color in a quarter second.

Once players has revealed few colors, player needs to use his own strategy to reveal and match cards till all cards disappear.

The player gets 16 clicks to finish the game, otherwise the player loses and the game is reset again.

##What features did it include?

The game board was created using HTML.

The game features a click counter that counts the number of clicks.

Flexbox was used to size and position the cards.

The game features a START OVER button that resets the game.

##Were there any particular pain points or unsolved problems you had to manage? (e.g. technological, timing, content, etc.)

The first issue was to make sure cards did not have the same color on it when a new game was played or when game was reset.

I could not create 1 click event for all my cards to add different colors. I have a click event on each individual card. For this reason, I decided to go with 10 cards rather than 20 cards from my MVP.

I want to figure out a way to do this even after the project has been submitted.

##Is there any other information you think might help us understand what you've built?

Most memory games reveal the cards for a short period of time before flipping over. This game does not reveal the colors on load. Player has to reveal the cards and keep the colors in their memory.

The cards do disappear if player clicks on it twice. However that approach of playing won't allow the player to win because it takes 20 clicks to win.

If I did not use a setTimeout function, player would not see the second card if colors did not match. This would be a more challenging to the player's memory. A more tedious and careful strategy would have to be used to win in 16 clicks and under.

I think the game can be made more difficult if the colors would include different shades of the same color.

##List the technologies used

HTML, CSS, Flexbox, Javascript, JQuery

##Describe the approach taken

Instead of rendering the board from Javascript, I created the board using HTML and CSS.

The next step was to create an array of of colors that would appear on the board. Then create a randomized array of that to make sure different colors would appear on cards every new game.

The next step was to execute the events that would happen when an individual card was clicked.

    * When a card is clicked, first it checks if the clicks count is 16.
    * If click count is 16, it displays the game lost alert.
    * If click count is less than 16,  adds 1 to the click count,displays it, and reveals the color of the card.
    * It puts the color of the card in an array, and also the card in an array.
    * It checks to see if the card array has two elements.
    * If the card array has two elements, then it checks to see if the two colors in the color array is the same.
    * If the two colors are same, the respective cards will have an opacity of zero.
    * If the two colors are not the same, the cards will turn back to its original color after a slight delay.
    * If all cards disappear, a win message is alerted.
