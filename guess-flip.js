// Import coin functions
import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs"
import minimist from 'minimist'
// Take one argument on the command line named --call that will only accept .
// If no argument is given, or something other than “heads” or “tails” is passed with --call, return an error message (see below for example).
// Compare the call with a flip and report the result to STDOUT (see below)