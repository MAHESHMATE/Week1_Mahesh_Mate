// Importing modules and functions
import express, {Request , Response} from 'express';
import { splitString, concatenateStrings, isLeapYear, getSecretHandshake } from './logic';
import { error } from 'console';

// Creating an Express application
const app = express();
const port = 8000;

// Route to split a string
app.get('/split/:stringToSplit', (req: Request, res: Response) => {
    // Extracting the string to split from request parameters
    const { stringToSplit } = req.params;
    // Calling the splitString function from the logic module
    const revisedString = splitString(stringToSplit);

    // Sending the revised string as a JSON response
    res.json({ 
        revisedString 
    });
//e.g.,: http://localhost:8000/split/CentraLogic_Employee
});

// Route to concatenate strings
app.get('/concatenate', (req: Request, res: Response) => {
    // Extracting parameters from query string
    const { param1, param2 } = req.query;
    // Calling the concatenateStrings function from the logic module
    const revisedString = concatenateStrings(param1 as string, param2 as string);

    // Sending the revised string as a JSON response
    res.json({ 
        revisedString 
    });
//e.g.,: http://localhost:8000/concatenate?param1=CentraLogic&param2=Employee
});

// Route to check if a year is a leap year
app.get('/leapyear/:year', (req: Request, res: Response) => {
    // Extracting the year from request parameters
    const { year } = req.params;
    // Validating the input
    if (!year || isNaN(Number(year))) {
        res.status(400).json({ error: 'Invalid year provided.'});
        return;
    }
    // Checking if the year is a leap year using the isLeapYear function
    const isLeap = isLeapYear(parseInt(year));

    // Sending the result as a JSON response
    res.json({ 
        year: parseInt(year), 
        isLeap 
    });
//e.g.,: http://localhost:8000/leapyear/2000
});

// Route to generate a secret handshake sequence from a number
app.get('/secret-handshake/:number', (req: Request, res: Response) => {
    // Extracting the number from request parameters
    const { number } = req.params;
    // Validating the input
    if (!number || isNaN(Number(number))) {
        res.status(400).json({ error: 'Invalid number provided.' });
        return;
    }
    // Generating the secret handshake sequence using the getSecretHandshake function
    const handshake = getSecretHandshake(parseInt(number));

    // Sending the result as a JSON response
    res.json({ 
        number: parseInt(number), 
        handshake 
    });
//e.g.,: http://localhost:8000/secret-handshake/26
});

// Starting the server and listening on the port 8000
app.listen(port, ()=> {
    console.log(`Hii we are comfortable in NodeJS`);
    console.log(`Server is running on http://localhost:${port}`);

})