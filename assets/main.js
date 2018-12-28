var hangman = {

    countriesToPick: {
        Venezuela: {
            picture: "venezuela.png",
            country: "Venezuela",
            Website: "https://en.wikipedia.org/wiki/Venezuela"
        },
        Colombia: {
            picture: "colombia.png",
            country: "Colombia",
            website: "https://en.wikipedia.org/wiki/Colombia"
        },
        Ecuador: {
            picture: "ecuador.png",
            country: "Ecuador",
            website: "https://en.wikipedia.org/wiki/Ecuador"
        },
        Guyana: {
            picture: "guyana.jpg",
            country: "Guyana",
            website: "https://en.wikipedia.org/wiki/Guyana"
        },
        Suriname: {
            picture: "suriname.jpg",
            country: "Suriname",
            website: "https://en.wikipedia.org/wiki/Suriname"
        },
        FrenchGuiana: {
            picture: "french-guiana.png",
            country: "French Guiana",
            website: "https://en.wikipedia.org/wiki/French_Guiana"
        },
        Peru: {
            picture: "peru.png",
            country: "Peru",
            website: "https://en.wikipedia.org/wiki/Peru"
        },
        Brazil: {
            picture: "brazil.png",
            country: "Brazil",
            website: "https://en.wikipedia.org/wiki/Brazil"
        },
        Bolivia: {
            picture: "bolivia.png",
            country: "Bolivia",
            website: "https://en.wikipedia.org/wiki/Bolivia"
        },
        Paraguay: {
            picture: "paraguay.jpg",
            country: "paraguay",
            website: "https://en.wikipedia.org/wiki/Paraguay"
        },
        Argentina: {
            picture: "argentina.png",
            country: "Argentina",
            website: "ttps://en.wikipedia.org/wiki/Argentina"
        },
        Uruguay: {
            picture: "uruguay.jpg",
            country: "Uruguay",
            website: "https://en.wikipedia.org/wiki/Uruguay"
        },
        Chile: {
            picture: "chile.jpg",
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

setupGame: function() {
    var objKeys = Object.keys(this.countriesToPick);
    this.country = objKeys[Math.floor(Math.random() * objKeys.length)];

    this.country.split("");
}
};

hangman.setupGame();
