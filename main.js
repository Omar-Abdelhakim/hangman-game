const letters = "abcdefghijklmnopqrstuvwxyz";
const lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");
lettersArray.forEach(letter => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});
const words = {
  "Arabic Countries": [
    "Egypt",
    "Saudi Arabia",
    "United Arab Emirates",
    "Kuwait",
    "Qatar",
    "Bahrain",
    "Oman",
    "Yemen",
    "Iraq",
    "Syria",
    "Lebanon",
    "Jordan",
    "Palestine",
    "Libya",
    "Tunisia",
    "Algeria",
    "Morocco",
    "Sudan",
    "Somalia",
    "Djibouti",
    "Comoros",
    "Turkey",
    "France",
    "Italy",
    "Spain",
    "Germany",
    "England",
    "Brazil",
    "Argentina",
    "Portugal",
    "Japan",
    "China",
    "India",
    "Canada",
    "America",
    "Mexico",
    "Australia",
    "Russia",
    "Greece",
    "Switzerland",
    "Netherlands",
    "Belgium",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "South Korea",
    "South Africa"
  ],

  "Football Players": [
    "Messi",
    "Ronaldo",
    "Neymar",
    "Mbappe",
    "Salah",
    "Haaland",
    "Vinicius",
    "Bellingham",
    "De Bruyne",
    "Benzema",
    "Modric",
    "Lewandowski",
    "Sane",
    "Kane",
    "Son",
    "Pedri",
    "Gavi",
    "Musiala",
    "Foden",
    "Griezmann",
    "Marmoush",
    "Emam Ashour",
    "Maradona",
    "Pele",
    "Ronaldinho",
    "Zidane",
    "Xavi",
    "Iniesta",
    "Ramos",
    "Puyol",
    "Beckham",
    "Rooney",
    "Ibrahimovic",
    "Henry",
    "Mbappe",
    "Nani",
    "Neymar",
    "Kaka",
    "Ribery",
    "Robben",
    "Buffon",
    "Casillas",
    "Alisson",
    "Courtois",
    "Kroos",
    "Ozil",
    "Fabregas",
    "Hazard",
    "Mahrez"
  ],

  "Programming Languages": [
    "JavaScript",
    "Python",
    "Java",
    "PHP",
    "C",
    "C++",
    "C#",
    "Go",
    "Rust",
    "Ruby",
    "Swift",
    "Kotlin",
    "Dart",
    "Scala",
    "Fortran",
    "Pascal",
    "Perl",
    "Lua",
    "R",
    "SQL",
    "TypeScript",
    "Assembly",
    "MATLAB",
    "Objective C",
    "Visual Basic"
  ],

  "Video Games": [
    "Minecraft",
    "Fortnite",
    "Roblox",
    "FIFA",
    "PUBG",
    "GTA",
    "Among Us",
    "Free Fire",
    "Call of Duty",
    "God of War",
    "The Last of Us",
    "Valorant",
    "Terraria",
    "Pokemon",
    "Tekken",
    "Mortal Kombat",
    "Mario",
    "Sonic",
    "Tetris",
    "Pac Man",
    "Fall Guys",
    "Apex Legends",
    "Overwatch",
    "Rocket League",
    "League of Legends",
    "Resident Evil",
    "Far Cry",
    "Assassins Creed",
    "Need for Speed",
    "Forza",
    "Red Dead Redemption",
    "WWE",
    "Brawl Stars",
    "Clash Royale",
    "Clash of Clans",
    "Subway Surfers",
    "Temple Run",
    "Angry Birds",
    "Candy Crush",
    "Cuphead",
    "FIFA Street",
    "Hitman",
    "Doom",
    "Cyberpunk",
    "Watch Dogs",
    "Uncharted",
    "Spider Man",
    "Batman",
    "Hogwarts Legacy"
  ],

  Animals: [
    "Lion",
    "Tiger",
    "Elephant",
    "Monkey",
    "Horse",
    "Dog",
    "Cat",
    "Shark",
    "Eagle",
    "Panda",
    "Giraffe",
    "Zebra",
    "Wolf",
    "Fox",
    "Bear",
    "Rabbit",
    "Dolphin",
    "Whale",
    "Cheetah",
    "Gorilla",
    "Kangaroo",
    "Crocodile",
    "Snake",
    "Turtle",
    "Frog",
    "Penguin",
    "Parrot",
    "Owl",
    "Eagle",
    "Chicken",
    "Duck",
    "Cow",
    "Sheep",
    "Goat",
    "Pig",
    "Donkey",
    "Camel",
    "Deer",
    "Monkey",
    "Mouse",
    "Rat",
    "Ant",
    "Bee",
    "Butterfly",
    "Spider",
    "Fish",
    "Octopus",
    "Crab",
    "Lobster"
  ],

  Cars: [
    "BMW",
    "Mercedes",
    "Ferrari",
    "Lamborghini",
    "Porsche",
    "Toyota",
    "Honda",
    "Audi",
    "Tesla",
    "Nissan",
    "Bugatti",
    "McLaren",
    "Bentley",
    "Ford",
    "Chevrolet",
    "Volkswagen",
    "Volvo",
    "Mazda",
    "Kia",
    "Hyundai",
    "Jeep",
    "Lexus",
    "Jaguar",
    "Dodge",
    "Subaru",
    "Mitsubishi",
    "Peugeot",
    "Renault",
    "Fiat",
    "Land Rover",
    "Range Rover",
    "Aston Martin",
    "Rolls Royce",
    "Mini Cooper",
    "Alfa Romeo",
    "Maserati",
    "Cadillac",
    "Lincoln",
    "Chrysler",
    "Genesis",
    "Suzuki",
    "Isuzu",
    "Acura",
    "Infiniti",
    "Hummer",
    "Pontiac",
    "Seat",
    "Skoda",
    "Citroen"
  ]
};
let allKeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];
document.querySelector(
  ".game-info .category span:last-child"
).innerHTML = randomPropName;
let lettersGuessContainer = document.querySelector(".letter-gues");
let lettersAndSpaces = Array.from(randomValueValue);
lettersAndSpaces.forEach(letter => {
  let emptySpan = document.createElement("span");
  if (letter === " ") {
    emptySpan.className = "with-space";
  }
  lettersGuessContainer.appendChild(emptySpan);
});
let guessSpans = document.querySelectorAll(".letter-gues span");
let wrongAttemps = 0;
let gameFinished = false;
let theDraw = document.querySelector(".hangman-draw");
let wrongCounter = document.querySelector(".wrong-counter strong");
document.addEventListener("click", e => {
  if (gameFinished || !e.target.classList.contains("letter-box")) {
    return;
  }
  e.target.classList.add("clicked");
  let theClickedLetter = e.target.innerHTML.toLowerCase();
  let theChosenWord = Array.from(randomValueValue.toLowerCase());
  let theStatus = false;
  theChosenWord.forEach((wordLetter, wordIndex) => {
    if (theClickedLetter === wordLetter) {
      theStatus = true;
      guessSpans.forEach((span, spanIndex) => {
        if (wordIndex === spanIndex) {
          span.innerHTML = theClickedLetter;
          span.classList.add("revealed");
        }
      });
    }
  });
  if (!theStatus) {
    wrongAttemps++;
    wrongCounter.innerHTML = wrongAttemps;
    theDraw.classList.add(`wrong-${wrongAttemps}`);
    let failSound = document.getElementById("fail");
    failSound.currentTime = 0;
    failSound.play().catch(() => {});
    if (wrongAttemps === 8) {
      gameFinished = true;
      lettersContainer.classList.add("finish");
      setTimeout(() => {
        endGame();
      }, 500);
    }
  } else {
    let successSound = document.getElementById("success");
    successSound.currentTime = 0;
    successSound.play().catch(() => {});
    checkWin();
  }
});
function checkWin() {
  let won = true;
  guessSpans.forEach(span => {
    if (!span.classList.contains("with-space") && span.innerHTML === "") {
      won = false;
    }
  });
  if (won) {
    gameFinished = true;
    lettersContainer.classList.add("finish");
    setTimeout(() => {
      winGame();
    }, 500);
  }
}
function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Game Over! The word was "${randomValueValue}"`
  );
  div.appendChild(divText);
  div.className = "popup";
  document.body.appendChild(div);
  let button = document.createElement("button");
  let buttonText = document.createTextNode("Play Again");
  button.className = "end-button";
  button.onclick = function() {
    location.reload();
  };
  button.appendChild(buttonText);
  div.appendChild(button);
}
function winGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode("Congratulations! You Win 🎉");
  div.appendChild(divText);
  div.className = "popup";
  document.body.appendChild(div);
  let button = document.createElement("button");
  let buttonText = document.createTextNode("Play Again");
  button.className = "end-button";
  button.onclick = function() {
    location.reload();
  };
  button.appendChild(buttonText);
  div.appendChild(button);
}
