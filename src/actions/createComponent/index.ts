import * as inquirer from "inquirer";
import * as fs from "fs";
import * as fse from "fs-extra";
import chalk from "chalk";
import { generateHandlebar } from "../../helpers/handlebar";
import questions from "./questions";
import { DEFAULT_PATH } from "./constants";

const createComponent = async () => {
    const answer = await inquirer.prompt(questions);
    const { COMPONENT_NAME, COMPONENT_TEST, COMPONENT_STYLED }: any = answer;
    doCreateComponent(COMPONENT_NAME, {
        isTestIncluded: COMPONENT_TEST,
        isStyledComponentIncluded: COMPONENT_STYLED,
    });
}

async function helper(pureFilename: string, output:string, pathInFilename: string, result: any, cb: Function) {
    try {
        fs.writeFile(`${DEFAULT_PATH}/${pathInFilename}/${pureFilename}/${output}`, result, (err) => {
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

const doCreateComponent = async (filename: string, configs: any) => {
    
    const templatePath = __dirname + '/templates/class.tsx.hbs';
    const templateTestPath = __dirname + '/templates/test.tsx.hbs';
    const templateStyledPath = __dirname + '/templates/styled.ts.hbs';
    const exportPath = __dirname + '/templates/export.ts.hbs';
    const seederPath = __dirname + '/templates/seeder.ts.hbs';
    const interfacesPath = __dirname + '/templates/interfaces.ts.hbs';
    const splitFilename = filename.split("/");
    const pureFilename = splitFilename[splitFilename.length - 1];
    
    splitFilename.splice(-1, 1)
    const pathInFilename = splitFilename.join("/")
    
    await fse.mkdirp(`${DEFAULT_PATH}/${pathInFilename}/${pureFilename}`);

    /**
     * create main filename && support file
     */
    try {
        const result = await generateHandlebar(
            templatePath,
            { name: pureFilename }
        );
        await helper(pureFilename, `${pureFilename}.tsx`, pathInFilename, result, () => {
            console.log(chalk.green("Component has been created!"))
        });
    } catch (err) {
        console.log(chalk.red("oh no, error happen!"), err)
    }


    try {
        const result = await generateHandlebar(
            exportPath,
            { name: pureFilename }
        );
        await helper(pureFilename, `export.ts`, pathInFilename, result, () => {
            console.log(chalk.blue("export file has been created!"))
        });

        const result2 = await generateHandlebar(
            seederPath,
            { name: pureFilename }
        );
        await helper(pureFilename, `seeder.ts`, pathInFilename, result2, () => {
            console.log(chalk.blue("seeder file has been created!"))
        });

        const result3 = await generateHandlebar(
            interfacesPath,
            { name: pureFilename }
        );
        await helper(pureFilename, `interfaces.ts`, pathInFilename, result3, () => {
            console.log(chalk.blue("interfaces file has been created!"))
        });
    } catch (err) {
        console.log(chalk.red("oh no, error happen!"), err)
    }

    /**
     * create test file
     */
    if (configs.isTestIncluded) {
        try {
            const result = await generateHandlebar(
                templateTestPath,
                { name: pureFilename }
            );
            await helper(pureFilename, `${pureFilename}.test.tsx`, pathInFilename, result, () => {
                console.log(chalk.green("Test has been created!"))
            });
        } catch (err) {
            console.log(chalk.red("oh no, error happen!"), err)
        }
    }
    
    /**
     * create test file
     */
    if (configs.isStyledComponentIncluded) {
        try {
            const result = await generateHandlebar(
                templateStyledPath,
                { name: pureFilename }
            );
            await helper(pureFilename, `Styled${pureFilename}.ts`, pathInFilename, result, () => {
                console.log(chalk.green("Styled component has been created!"))
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