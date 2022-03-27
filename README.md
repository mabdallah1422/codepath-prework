# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Mahdi Abdallah**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/luck-aeolian-nectarine?path=index.html%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked.
* [x] Game buttons each light up and play a sound when clicked.
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added a box to show the user how many lives they have left
- [x] Asked the user how long they want the pattern to be, with a restriction of up to 20 buttons long. If invalid
  input was given, would continue to ask until valid input was given, unless the cancel button was pressed
- [x] Asked the user how many lives they want to start with, with a restriction of up to 20 lives. If invalid input
  was given, would continue to ask until valid input was given, unless the cancel button was pressed
- [x] Shows the user the longest pattern they've gone up to so far
- [x] Made a slight modification to the title depending on if the user just opened
  up the site, are in the middle of a game, or have just finished a game
- [x] Disable buttons while a clue sequence is being given to avoid the user
  disturbing the sequence while it is being given
- [x] Gives the user the option to have the pattern played back
  to them after losing to see where they went wrong

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![](https://i.imgur.com/pLugBrO.gif)

This gif shows winning and losing a game.

![](https://i.imgur.com/p0Hcx2A.gif)

This gif shows that only valid input is accepted


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
- https://www.w3schools.com/jsref/met_win_prompt.asp
- https://www.w3schools.com/jsref/jsref_includes.asp
- https://stackoverflow.com/questions/22456641/disable-non-clickable-an-html-button-in-javascript
- https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
- https://stackoverflow.com/questions/70871364/how-to-display-dynamic-variable-in-html
- https://www.guinnessworldrecords.com/world-records/longest-game-of-simon#:~:text=The%20most%20sequences%20completed%20in,they%20completed%20their%2084th%20sequence.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   The biggest challenge I faced while creating this submission was allowing myself to implement a basic version that worked, and then incrementally adding features. Immediately after watching the video, I had begun to think of different features that could be added to enhance the user’s experience. The first change I wanted to make was to randomize the pattern, as I figured it would be simple enough. I then got rid of the pre-existing pattern in favor of a randomized pattern very early on. However, this increased the number of places for potential bugs on my first iteration of the project. When I ran into an issue after implementing the logic for guess, I wasn’t quite sure if the problem was with the logic for guess or the randomly generated pattern (sadly, it turned out that there was an issue with both the randomly generated pattern and the logic for guess). After some time, I reverted back to the pattern being pre-determined to ensure my implementation of guess was the only potential source of bugs. While debugging, I went back to the flowchart which illustrated how guess should be implemented. With this as a guide and the predictable nature of the predetermined pattern, I was able to correctly implement the logic for guess. Then, I tried my hand at implementing the random pattern generator. Since I knew guess now worked, it made it easier to correctly implement the random pattern generator, and I realized my mistake. After this, I realized the importance of adding features slowly and ensuring correctness incrementally, as opposed to attempting to add many features at once and not knowing which is a source of bugs. This helped immensely when implementing other features, such as asking how many lives the user would like or how long the user would like the pattern to be, as I first added the feature of asking how long the pattern should be, and then added the feature of asking how many lives the user would like.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   I now wonder about the tradeoffs web developers must consider when creating web applications. For example, I began to question whether or not I should give the user more or less access to things such as how many buttons appear, what color the buttons were, or what sound each button makes. While on paper I thought that giving the user more options would inherently be better than less, I began to realize that too many options can overwhelm the user when I went to play the game. In addition, having too many options can potentially detract from what the main purpose of the application is; a memory game. Another tradeoff I considered came when I would ask the user how long they wanted the pattern to be or how many lives they wanted. I had at first made it so that the user could input any positive integer as their number of lives or as the length of the pattern, but I now restrict both to be up to 85 (I chose 85 since it is one greater than the simon says world record) This was because an extremely long pattern would take too long to generate and if a user input a number greater than the largest number JavaScript allows, it would throw an error but not give the user any feedback. Due to this, I now wonder how web developers decide how to restrict user input in cases that may not be as clear as imposing an upper bound on numbers, such as strings following specific rules.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   I would first try to figure out a way to change the logo on the website to something other than a fish, as it doesn’t seem to be relevant to the game and is there because of Glitch. I’d change it to a picture of the Simon Says electronic game, as a nod to what it is based on. I would also add a prompt that asks the user how many buttons they’d like, ranging from 2 to 8. I also noticed that when I’d try to play the game on my phone, it wouldn’t output any sound when I pressed a button, and the fourth button appeared completely black instead of yellow. In addition, when I would press and hold on a button on my phone, it wouldn’t register as a press at all. I’d spend time trying to learn why it didn’t work as well on a mobile device as it did on a desktop or laptop.




## Interview Recording URL Link

[My 5-minute Interview Recording](https://mit.zoom.us/rec/play/oNtjLjH_UghY1iUaOIQBV_Zd64bP_gg3hgmVbFz5CuCGQuEc2qtXAlTnh-r4Zis48keQ_YQnoEZRkNMf.FaR3EefhqbaigcPK?startTime=1648408106000)


## License

    Copyright [Mahdi Abdallah]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.