import * as inquirer from "inquirer";
import chalk from 'chalk';

import questions from "./questions";
import { COMPONENT, CONTAINER, SAY_HI } from "./constants";

import createComponent from "../createComponent";

const doAction = async () => {
    const answer = await inquirer.prompt(questions);

    const { ACTIONS }: any = answer

    switch (ACTIONS) {
        case COMPONENT:
            createComponent()
            break;
        case CONTAINER:
            console.log("YOU'RE ABOUT TO CREATE CONTAINER!");
            break;
        case SAY_HI:
            console.log(chalk.green("Well, Hello! :)"));
            break;
        default:
            console.log(chalk.red("Bye!"));
            break;
    }
}

export default doAction;
