#!/usr/bin/env node

const {readFileSync}= require('fs');

const arg = process.argv[2];
//grab file path as argument on command line

if(arg){
    try {
        const data = readFileSync(arg); //read this file
        process.stdout.write(data);  //print raw contents out to console
    } catch (error) {
        console.log(err.stack);
    }
}else{
    process.exit();//if they don't enter anything, exit the process
}
