// Global constants
const clueHoldTime = 300; // Time to hold each clue's button
const cluePauseTime = 333; // How long to pause in between clues
const nextClueWaitTime = 1000; // How long to wait before giving the next clue
//Global Variables

var possibleClues = [1, 2, 3, 4];
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0;
var livesLeft = 0;
var longestPattern = 0;
enableButtons(); // buttons disabled automatically, enable them at the start


function generateNewPattern(patternLength){
  pattern = [];
  for (let i = 0; i < patternLength; i++){
    let randomIndex = Math.floor(Math.random() * possibleClues.length);
    pattern.push(possibleClues[randomIndex]);
  }
}
function ensurePositiveIntegerInput(userInput){
  let finalInput = userInput;
  if (finalInput === null){
    stopGame();
    return;
  }
  while (isNaN(Number(finalInput))
          || finalInput.toString().includes(".")
          || finalInput.toString().includes("-")
          || Number(finalInput) === 0       // Want to make sure we are given a positive integer less than 20
          || Number(finalInput) > 20){     // and want to ensure the user can get out by pressing cancel
                                            // 20 was chosen as it seemed to be a pattern of somewhat reasonable
                                            // length
      finalInput = prompt("Oops! Please make sure to input a positive integer less than 20.");
      if (finalInput === null){
        stopGame();
        return
      }
    }
  return Number(finalInput);
  
}
function startGame(){
    //initialize game variables
  document.getElementById("title").innerHTML = "Repeat the pattern back by pressing buttons. Press stop at any time to end the game.";
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  let patternLength = prompt("Choose the length of the pattern.\nThe pattern can be 1 to 20 buttons long.");
  patternLength = ensurePositiveIntegerInput(patternLength);
  if (patternLength !== undefined){
    generateNewPattern(patternLength);
    livesLeft = prompt("Choose how many lives you start with.You can have 1 to 20 lives.");
    livesLeft = ensurePositiveIntegerInput(livesLeft);
    if (livesLeft !== undefined){
      document.getElementById("lifeCounter").innerHTML = "lives left: " + livesLeft;
      document.getElementById("lifeCounter").classList.remove("hidden");
      playClueSequence(); // Plays the initial clue
  }
  }
}

function stopGame(){
  document.getElementById("title").innerHTML = "Repeat the pattern back by pressing buttons. Press start at any time to start a new game.";
  livesLeft = 0;
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("lifeCounter").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
  
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function disableButtons(){
  document.getElementById('button1').disabled = true;
  document.getElementById('button2').disabled = true;
  document.getElementById('button3').disabled = true;
  document.getElementById('button4').disabled = true;
}

function enableButtons(){
  document.getElementById('button1').disabled = false;
  document.getElementById('button2').disabled = false;
  document.getElementById('button3').disabled = false;
  document.getElementById('button4').disabled = false;
}

function playSingleClue(btn){
  if (gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  disableButtons();
  guessCounter = 0;
  let enableDelay = nextClueWaitTime + (progress + 1) * (clueHoldTime + cluePauseTime); // re-enable the buttons after
                                                                                        // the pattern is done playing
  setTimeout(enableButtons, enableDelay);
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  return enableDelay
}

function loseGame(){
  let playSequence = confirm("Game over. You lost. Click ok to have the pattern played back to you.")
  if (playSequence){
    playClueSequence();
    let end = playClueSequence();
    setTimeout(stopGame, end);
  }
  else{
    stopGame();
  }
}

function winGame(){
  stopGame();
  alert("Congratulations! You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if (!gamePlaying){
    return;
  }
  
  if (btn === pattern[guessCounter]){ // Got it right
    if (guessCounter < progress){     // Still needs to get the rest of the sequence
      guessCounter++;
    }
    else{ // Got up to the last turn and got all the clues in the pattern, so the player won
      if (guessCounter === pattern.length - 1){
        if (pattern.length > longestPattern){
          longestPattern = pattern.length;
          document.getElementById("longestPattern").innerHTML = "Longest Pattern: " + longestPattern;
      }
        winGame();
      }
      else{ // Finished some turn before the last, onto the next turn
        progress++;
        if (progress > longestPattern){
          longestPattern = progress;
          document.getElementById("longestPattern").innerHTML = "Longest Pattern: " + longestPattern;
      }
        playClueSequence();
      }
    }
  }
  
  else{ // Got it wrong
    livesLeft--;
    document.getElementById("lifeCounter").innerHTML = "Lives Left: " + livesLeft;
    if (livesLeft <= 0){ // Ran out of lives, lost the game
      loseGame();
    }
    else{ // Still has lives left, tell the user how many they have
      if (livesLeft > 1){
        alert("Button " + btn + " was not next in the sequence! You have " + livesLeft + " lives left.")
      }
      else{
        alert("Button " + btn + " was not next in the sequence! You have " + livesLeft + " life left.")
      }
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)