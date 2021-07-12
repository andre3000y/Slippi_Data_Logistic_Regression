const { SlippiGame } = require("@slippi/slippi-js");

var gamenum = 221

for (let i = 1; i < gamenum; i++) {

    var current = i.toString();

    var file_path = "Slippi/game (" + current + ").slp"

    const game = new SlippiGame(file_path);

    // Get computed stats - openings / kill, conversions, etc
    const stats = game.getStats();

    var stats_str = JSON.stringify(stats);

    var fs = require('fs');
    fs.writeFile("jsons/"+current+".txt", stats_str, function(err) {
        if (err) {
            console.log(err);
        }
    });
}