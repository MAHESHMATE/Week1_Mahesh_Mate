# Week1_Mahesh_Mate

#Steps to run the project

npm i

npm run build

npm start

1. Create a basic server using NodeJS , Express, TypeScript and do the followinng in seperate apis respectively
in same app.ts

Note: Use a seperate file (logic.ts ). Logic.ts will be exporting all functions and those will be imported(required) in
app.ts

a. GET request —→ 
Develop an api that will return 
Request —> localhost:8000/split/CentraLogic_Employee
Response —> JSON
{ “revisedString” : “CentraLogic Employee”;
}
Hint : Use predefined function for splitting words

b. GET request —→ Get two parameters from path(route) and concatenate them into one
Response —> JSON
{ “revisedString” : “CentraLogicEmployee”;
}
Hint : Make use of req.params or req.query (Try both for knowing better use of both).

c. Create another api in same app.ts to solve a question
A leap year (in the Gregorian calendar) occurs:
In every year that is evenly divisible by 4.
Unless the year is evenly divisible by 100, in which case it's only a leap year if the year is also evenly divisible by 400.
Some examples:
1997 was not a leap year as it's not divisible by 4.
1900 was not a leap year as it's not divisible by 400.
2000 was a leap year!

d. Create another api in same app.ts to solve a question
You are starting a secret coding club with some friends and friends-of-friends. Not everyone knows each other, so you and your friends have decided to create a secret handshake that you can use to recognize that someone is a member. You don't want anyone who isn't in the know to be able to crack the code.
You've designed the code so that one person says a number between 1 and 31, and the other person turns it into a series of actions.
Your task is to convert a number between 1 and 31 to a sequence of actions in the secret handshake.

The sequence of actions is chosen by looking at the rightmost five digits of the number once it's been converted to binary. Start at the right-most digit and move left.

The actions for each number place are:

00001 = wink
00010 = double blink
00100 = close your eyes
01000 = jump
10000 = Reverse the order of the operations in the secret handshake.
Let's use the number 9 as an example:

9 in binary is 1001.
The digit that is farthest to the right is 1, so the first action is wink.
Going left, the next digit is 0, so there is no double-blink.
Going left again, the next digit is 0, so you leave your eyes open.
Going left again, the next digit is 1, so you jump.
That was the last digit, so the final code is:
wink, jump

Given the number 26, which is 11010 in binary, we get the following actions:
double blink
jump
reverse actions

The secret handshake for 26 is therefore:
jump, double blink
