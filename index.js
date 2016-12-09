#!/usr/bin/env node

const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
const fs = require('fs');
const program = require('commander');

program
    .version('0.0.1')
    .option('-i, --input [file path]', 'input')
    .option('-r, --remove', 'Field removal switch')
    .parse(process.argv);

const inputData = fs.readFileSync(program.input ? program.input : '/dev/stdin', 'utf8');
const headers = inputData.split('\n')[0].replace(/,/g, '\n');
const option = program.remove ? '-r ' : '';
const colNames = execSync(`peco`, {input: headers})
    .toString()
    .replace(/\n/g, ',')
    .slice(0, -1);
const cmd = `mcut ${option}f=${colNames}`;
console.log(execSync(cmd, {input: inputData}).toString());
