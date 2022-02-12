// Import coin functions
import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs"
import minimist from 'minimist'
// Take one argument on the command line named --call
const args = minimist(process.argv.slice(2))
args['call']
// If no argument is given, or something other than “heads” or “tails” is passed with --call, return an error message (see below for example).
let guess = args.call
if (guess !== 'tails' & guess !== 'heads' & guess !== null) {
    console.log('Error: no input.\nUsage: node guess-flip --call=[heads|tails]')
    process.exit(1)
}
// Compare the call with a flip and report the result to STDOUT
console.log(flipACoin(guess))