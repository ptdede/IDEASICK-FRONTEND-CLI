import chalk from "chalk";
import * as figlet from "figlet";

const initHeader = () => {
    console.log(
        chalk.green(
            figlet.textSync("IDEASICK")
        )
    );
} 

export default initHeader;
