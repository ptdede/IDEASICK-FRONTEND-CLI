import { COMPONENT, CONTAINER, SAY_HI } from "./constants";

const questions = [
    {
        name: "ACTIONS",
        type: "list",
        message: "Hi! What do you wanna do?",
        choices: [
            {
                name: "Create a Component",
                value: COMPONENT
            },
            {
                name: "Create a Container",
                value: CONTAINER
            },
            {
                name: "Just say Hi!",
                value: SAY_HI
            }
        ],
    }
]; 

export default questions;