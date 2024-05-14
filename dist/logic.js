"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSecretHandshake = exports.isLeapYear = exports.concatenateStrings = exports.splitString = void 0;
// Function to split a string by replacing underscores with spaces
function splitString(inputString) {
    // Assuming inputString is in the format "CentraLogic_Employee"
    const revisedString = inputString.replace('_', ' '); // Replace underscore with space
    return revisedString;
}
exports.splitString = splitString;
// Function to concatenate two strings without any separation
function concatenateStrings(param1, param2) {
    // Concatenate param1 and param2 without any separation
    const revisedString = param1 + param2;
    return revisedString;
}
exports.concatenateStrings = concatenateStrings;
// Function to check if a given year is a leap year
function isLeapYear(year) {
    // Leap year conditions: divisible by 4 but not by 100 unless also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true; // It's a leap year
    }
    return false; // It's not a leap year
}
exports.isLeapYear = isLeapYear;
// Function to convert a number into a secret handshake sequence
function getSecretHandshake(number) {
    // Convert the number to binary and pad with zeroes to ensure 5 digits
    const binaryString = number.toString(2).padStart(5, '0');
    const actions = []; // Array to store the secret handshake actions
    // Decode each digit of the binary number to determine the actions
    if (binaryString[4] === '1')
        actions.push('wink'); // Rightmost digit
    if (binaryString[3] === '1')
        actions.push('double blink');
    if (binaryString[2] === '1')
        actions.push('close your eyes');
    if (binaryString[1] === '1')
        actions.push('jump');
    if (binaryString[0] === '1')
        actions.reverse(); // Leftmost digit
    return actions; // Return the secret handshake actions
}
exports.getSecretHandshake = getSecretHandshake;
//# sourceMappingURL=logic.js.map