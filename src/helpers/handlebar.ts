import * as fs from "fs";
import * as handlebars from "handlebars";

declare const Promise: any;

export function generateHandlebar(templateDir: string, data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
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