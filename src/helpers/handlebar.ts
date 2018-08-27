import * as fs from "fs";
import * as handlebars from "handlebars";

export function generateHandlebar(templateDir: string, data: any) {
    return new Promise((resolve, reject) => {
        try {
            const classTemplate = fs.readFileSync(templateDir, 'utf8');
            const compile: any = handlebars.compile(classTemplate)
            const result = compile(data)
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
}