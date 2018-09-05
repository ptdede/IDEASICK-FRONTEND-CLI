import { COMPONENT_NAME, COMPONENT_TEST, COMPONENT_STYLED, IS_WITH_BASE_COMPONENT } from "./constants";

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
        name: IS_WITH_BASE_COMPONENT,
        type: "confirm",
        message: "Wrap with HOC (withBaseComponent)?",
        default: true,
    },
    {
        name: COMPONENT_TEST,
        type: "confirm",
        message: "Include test file?",
        default: true,
    },
    {
        name: COMPONENT_STYLED,
        type: "confirm",
        message: "Include styled component?",
        default: true,
    },
]; 

export default question;
