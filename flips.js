// Import coin functions
import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs"
import minimist from 'minimist'
// Take one argument on the command line named --number.
const args = minimist(process.argv.slice(2))
args['number']
// If no argument is given, it should flip once by default.
const numTimes = args.number || 1
// The result on STDOUT should be an array of all of the flips in sequence followed by an object summarizing the flips.
let flips = coinFlips(numTimes)
let summary = countFlips(flips)
console.log(flips)
console.log(summary)
