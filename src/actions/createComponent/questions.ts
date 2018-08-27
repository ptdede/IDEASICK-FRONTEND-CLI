import { COMPONENT_NAME, COMPONENT_TEST } from "./constants";

const question = [
    {
        name: COMPONENT_NAME,
        type: "input",
        message: "Your component name: ",
        validate: (ans: string) => {
            if (ans !== '') return true;
            return false;
        }
    },
    {
        name: COMPONENT_TEST,
        type: "confirm",
        message: "Include test file?",
        default: true,
    }
]; 

export default question;
