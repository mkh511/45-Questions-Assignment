#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the folloing operation to perform task",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please Select Valid Operator");
}
