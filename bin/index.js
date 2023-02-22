#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
async function start() {
    await inquirer.prompt([{
            type: "number",
            message: "enter the Time for your Counter in Seconds : ",
            name: "option"
        }]).then((answers) => {
        startTimer(answers.option);
    });
}
againStart();
function startTimer(timer) {
    let ts = Date.now();
    ts = ts + (timer * 1000);
    console.log(`.............. Timer Started of ${timer} seconds ...............\n\n`);
    while (Date.now() <= ts) {
    }
    console.log(".............. Time Completed ..............");
}
async function againStart() {
    do {
        await start();
        console.log("\n");
        var option = await inquirer.prompt([{
                type: "input",
                message: chalk.green("Press Y to Start Again .........."),
                name: "question",
            }]);
    } while (option.question == "y" || option.question == "Y" || option.question == "YES" || option.question == "yes" || option.question == "Yes");
}
;
