#! /usr/bin/env node
const randomNumber = Math.floor(Math.random() * 10 + 1);
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! you guessed a right number.");
}
else {
    console.log("Opps! you guessed a wrong number.");
}
