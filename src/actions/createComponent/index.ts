import * as inquirer from "inquirer";
import * as fs from "fs";
import * as fse from "fs-extra";
import chalk from "chalk";
import { generateHandlebar } from "../../helpers/handlebar";
import questions from "./questions";
import { DEFAULT_PATH } from "./constants";

const createComponent = async () => {
    const answer = await inquirer.prompt(questions);
    const { COMPONENT_NAME, COMPONENT_TEST }: any = answer;
    doCreateComponent(COMPONENT_NAME, COMPONENT_TEST);
}

async function helper(pureFilename: string, ext:string, pathInFilename: string, result: any, cb: Function) {
    try {
        fs.writeFile(`${DEFAULT_PATH}/${pathInFilename}/${pureFilename}/${pureFilename}.${ext}`, result, (err) => {
            if (err) {
                console.log(chalk.red("error happen when creating file"), err)
            } else {
                cb()
            }
        });
    } catch (err) {
        console.log(chalk.red("oh no, error happen!"), err)
    }
}

const doCreateComponent = async (filename: string, isTestIncluded: boolean) => {
    
    const templatePath = __dirname + '/templates/class.tsx.hbs';
    const templateTestPath = __dirname + '/templates/test.tsx.hbs';
    const splitFilename = filename.split("/");
    const pureFilename = splitFilename[splitFilename.length - 1];
    
    splitFilename.splice(-1, 1)
    const pathInFilename = splitFilename.join("/")
    
    await fse.mkdirp(`${DEFAULT_PATH}/${pathInFilename}/${pureFilename}`);

    /**
     * create main filename
     */
    try {
        const result = await generateHandlebar(
            templatePath,
            { name: pureFilename }
        );
        await helper(pureFilename, 'tsx', pathInFilename, result, () => {
            console.log(chalk.green("Component has been created!"))
        });
    } catch (err) {
        console.log(chalk.red("oh no, error happen!"), err)
    }

    /**
     * create test file
     */
    if (isTestIncluded) {
        try {
            const result = await generateHandlebar(
                templateTestPath,
                { name: pureFilename }
            );
            await helper(pureFilename, "test.tsx", pathInFilename, result, () => {
                console.log(chalk.green("Test has been created!"))
            });
        } catch (err) {
            console.log(chalk.red("oh no, error happen!"), err)
        }
    }
}

export default createComponent;
export {
    doCreateComponent,
}