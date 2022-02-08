// Import the coinFlip function from your coin.mjs file
import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs"

// Take one argument on the command line named --number.
const args = require("minimist")(process.argv.slice(2))
args['number']
// If no argument is given, it should flip once by default.
const number = args.number || 1
// The result on STDOUT should be an array of all of the flips in sequence followed by an object summarizing the flips.