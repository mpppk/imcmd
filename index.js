#!/usr/bin/env node

const execSync = require('child_process').execSync;
const program = require('commander');

program
    .version('0.0.1')
    .option('-i, --input [file path]', 'input')
    .parse(process.argv);

const colName = execSync(`head -1 ${program.input} | tr ',' '\\n' | tr -d ' ' | peco`).toString().replace('\n', '');
const cmd = `mcut f=${colName} < ${program.input}`;
console.log(cmd);
console.log(execSync(cmd).toString());