const program = require('commander');

program
    .version('0.0.1')
    .option('-i, --input', 'input')
    .parse(process.argv);

console.log(`mcut f=$(head -1 ${program.input} | tr ',' '\\n' | tr -d ' ' | peco ) < ${program.input}`);