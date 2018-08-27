#!/usr/bin/env node

import initHeader from "./src/header";
import welcome from "./src/actions/welcome";

const runCLI = async () => {

    // init application header
    initHeader();

    // ask question
    welcome();
}

runCLI();
