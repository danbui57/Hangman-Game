var hangman = {

    countriesToPick: {
        venezuela: {
            picture: "venezuela.png",
            country: "Venezuela",
            Website: "https://en.wikipedia.org/wiki/Venezuela"
        },
        colombia: {
            picture: "colombia.png",
            country: "Colombia",
            website: "https://en.wikipedia.org/wiki/Colombia"
        },
        ecuador: {
            picture: "ecuador.png",
            country: "Ecuador",
            website: "https://en.wikipedia.org/wiki/Ecuador"
        },
        guyana: {
            picture: "guyana.png",
            country: "Guyana",
            website: "https://en.wikipedia.org/wiki/Guyana"
        },
        suriname: {
            picture: "suriname.png",
            country: "Suriname",
            website: "https://en.wikipedia.org/wiki/Suriname"
        },
        frenchguiana: {
            picture: "french-guiana.png",
           country: "French Guiana",
            website: "https://en.wikipedia.org/wiki/French_Guiana"
        },
        peru: {
            picture: "peru.png",
            country: "Peru",
            website: "https://en.wikipedia.org/wiki/Peru"
        },
        brazil: {
            picture: "brazil.png",
            country: "Brazil",
            website: "https://en.wikipedia.org/wiki/Brazil"
        },
        bolivia: {
            picture: "bolivia.png",
            country: "Bolivia",
            website: "https://en.wikipedia.org/wiki/Bolivia"
        },
        paraguay: {
            picture: "paraguay.png",
            country: "paraguay",
            website: "https://en.wikipedia.org/wiki/Paraguay"
        },
        argentina: {
            picture: "argentina.png",
            country: "Argentina",
            website: "ttps://en.wikipedia.org/wiki/Argentina"
        },
        uruguay: {
            picture: "uruguay.png",
            country: "Uruguay",
            website: "https://en.wikipedia.org/wiki/Uruguay"
        },
        chile: {
            picture: "chile.png",
            country: "Chile",
            website: "https://en.wikipedia.org/wiki/Chile"
        }
    },
country: null,
lettersOfCountry: [],
matchedLetters: [],
guessedLetters: [],
guessesLeft: 0,
totalGuesses: 0,
letterGuessed: null,
wins: 0,
losses: 0,

setupGame: function() {
    var objKeys = Object.keys(this.countriesToPick);
    this.country = objKeys[Math.floor(Math.random() * objKeys.length)];

    this.lettersOfCountry = this.country.split("");

    this.rebuildWordView();

    this.updateTotalGuesses();
},

updatePage: function(letter) {

    if (this.guessesLeft === 0) {
        this.restartGame();
        
    }else {
        this.updateGuesses(letter);

        this.updateMatchedLetters(letter);

        this.rebuildWordView();

        if (this.updateWins() === true) {
            this.restartGame();
            }
        if (this.guessesLeft === 0 && this.updateWins() === false) {
            this.losses += 1;
            document.querySelector("#losses").innerHTML = this.losses;
            this.restartGame();
        }
        }
    },

    updateGuesses: function(letter) {

        if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfCountry.indexOf(letter) === -1)) {

            this.guessedLetters.push(letter);

            this.guessesLeft--;
            
            document.querySelector("#guesses").innerHTML = this.guessesLeft;
            document.querySelector("#letters-guessed").innerHTML = this.guessedLetters.join(", ");
        }
    },

        updateTotalGuesses: function() {

            this.totalGuesses = this.lettersOfCountry.length + 5;
            this.guessesLeft = this.totalGuesses;

            document.querySelector("#guesses").innerHTML = this.guessesLeft;
        },    
        
        updateMatchedLetters: function(letter) {
        for (var i = 0; i < this.lettersOfCountry.length; i++) {
            
            if ((letter === this.lettersOfCountry[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
                this.matchedLetters.push(letter)
            }
            
        }
    },

    rebuildWordView: function() {

        var wordView = "";

        for(var i = 0; i < this.lettersOfCountry.length; i++) {

            if(this.matchedLetters.indexOf(this.lettersOfCountry[i]) !== -1) {
                console.log(wordView += this.lettersOfCountry[i]);
                
            }else {
                wordView += "  _  "
            }
        }
        document.querySelector("#current-word").innerHTML = wordView;
        
    },

    restartGame: function() {
        document.querySelector("#letters-guessed").innerHTML = "";
        this.country = null;
        this.lettersOfCountry = [];
        this.matchedLetters = [];
        this.guessedLetters = [];
        this.guessesLeft = 0;
        this.totalGuesses = 0;
        this.letterGuessed = null;
        this.setupGame();

    },

    updateWins: function() {
        var win;

        if (this.matchedLetters.length === 0) {
           
            win = false;
        }else {
            win = true;
        }
        for (var i = 0; i < this.lettersOfCountry.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersOfCountry[i]) === -1) {
                win= false;
            }
        }
        if (win) {
            this.wins += 1;

            document.querySelector("#wins").innerHTML = this.wins;

            document.querySelector("#continent-div").innerHTML = 
            "<img class='country-image' src='assets/images/" +
            this.countriesToPick[this.country].picture + "' alt='" +
            this.countriesToPick[this.country].country + "'>";

            document.querySelector("#wikiSite").innerHTML = 
            "<span id='link'> click here for more info </span>" + 
            "<a href=" + this.countriesToPick[this.country].website + ">" +
            this.countriesToPick[this.country].country + "</a>";

            return true;
        }
        return false;
    }

};


hangman.setupGame();

document.onkeyup = function(event) {

    hangman.letterGuessed = String.fromCharCode(event.which).toLowerCase();
    hangman.updatePage(hangman.letterGuessed);
};