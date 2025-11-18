//Define the actions of the game object, method
function printGame()
{
    var title_line = "<td>" + this.title + "</td>";
    var genre_line = "<td>" + this.genre + "</td>";
    var year_line = "<td>" + this.year + "</td>";
    var platform_line = "<td>" + this.platform + "</td>";
    var downloads_line = "<td>" + this.downloads + "</td>";

      var row = "<tr>" + title_line + genre_line + year_line + platform_line + downloads_line + "</tr>";
    document.write(row);
}

// Define an object using contructor function
function Game(title, genre, year, platform, downloads) 
{
    //list of attributes for this object
    this.title = title;
    this.genre = genre;
    this.year = year;
    this.platform = platform;
    this.downloads = downloads;
    //assign method to the game object
    this.printGame = printGame;
}

// Create game objects
var game1 = new Game("Minecraft", "Survival/Adventure", "2011", "Nintendo Switch/PC", "300 million");
var game2 = new Game("Legend of Zelda:Breath of the Wild","Action/Adventure", "2017", "Nintendo Switch", "33 million");
var game3 = new Game("Peak", "Co-op/Survival", "2025", "Windows (Steam)", "5 million");
var game4 = new Game("PUBG", "Battle Royale", "2017", "PC/Xbox", "1 billion");
var game5 = new Game("Overcooked", "Cooking/Simulation", "2016", "PC/Playstation/Nintendo Switch", "1 million" );

// Display game information
document.write("<table border='1'><tr><th>Title</th><th>Genre</th><th>Year</th><th>Platform</th><th>Downloads</th></tr>");
game1.printGame();
game2.printGame();
game3.printGame();
game4.printGame();
game5.printGame();
document.write("</table>");

//create array of game titles
var gameArray = [game1.title, game2.title, game3.title, game4.title, game5.title];

for(var counter = 0; counter < gameArray.length; counter++)
{
    document.write(gameArray[counter] + "<br>");
}    