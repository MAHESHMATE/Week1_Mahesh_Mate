// Function to split a string by replacing underscores with spaces
export function splitString(inputString: string): string {
    // Assuming inputString is in the format "CentraLogic_Employee"
    const revisedString = inputString.replace('_', ' '); // Replace underscore with space
    return revisedString;
}

// Function to concatenate two strings without any separation
export function concatenateStrings(param1: string, param2: string): string {
    // Concatenate param1 and param2 without any separation
    const revisedString = param1 + param2;
    return revisedString;
}

// Function to check if a given year is a leap year
export function isLeapYear(year: number): boolean {
    // Leap year conditions: divisible by 4 but not by 100 unless also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true; // It's a leap year
    }
    return false; // It's not a leap year
}

// Function to convert a number into a secret handshake sequence
export function getSecretHandshake(number: number): string[] {
    // Convert the number to binary and pad with zeroes to ensure 5 digits
    const binaryString = number.toString(2).padStart(5, '0');
    const actions: string[] = []; // Array to store the secret handshake actions
    
    // Decode each digit of the binary number to determine the actions
    if (binaryString[4] === '1') actions.push('wink'); // Rightmost digit
    if (binaryString[3] === '1') actions.push('double blink');
    if (binaryString[2] === '1') actions.push('close your eyes');
    if (binaryString[1] === '1') actions.push('jump');
    if (binaryString[0] === '1') actions.reverse(); // Leftmost digit
    
    return actions; // Return the secret handshake actions
}
