// function call_app(txn_uuid, from_address, bapp, request, callback) {
//      const { spawn } = require("child_process");
//      const bapp_dir = "/home/blockumulus/blockumulus/bapps";
     
//      rss = request.split(" ");
//      console.log(`RSS: ${rss}`);
//      var A = [`${bapp_dir}/${bapp}/code.py`, `${txn_uuid}`, `${from_address}`].concat(rss);
 
//      console.log(`A@: ${A}`);
//      const command = spawn(`python3`, A);
 
//      var result = "";
 
//       command.stdout.on('data', function(data) {
//          result += data.toString();
//          console.log(`@call_app adding result: ${result}`);
//          console.log(`@call_app data.toString(): ${data.toString()}`);
//          console.log(`@call_app data.toString(): ${data.toString()}`);
//          return callback(data.toString());
//       });
 
//       command.on('close', function(code) {
//           console.log(`@call_app returning result: ${result}`);
//           return callback(result);       
//       });
//  }



// === From prev commit ====
// function call_app(txn_uuid, from_address, bapp, request, callback) {
//      const { spawn } = require("child_process");
//      const bapp_dir = "/home/blockumulus/blockumulus/bapps";
     
//      rss = request.split(" ");
//      console.log(`RSS: ${rss}`);
//      var A = [`${bapp_dir}/${bapp}/code.py`, `${txn_uuid}`, `${from_address}`].concat(rss);
 
//      console.log(`A@: ${A}`);
//      const command = spawn(`python3`, A);
 
//      var result = "";
 
//       command.stdout.on('data', function(data) {
//          result += data.toString();
//       });
 
//       command.on('close', function(code) {
//            return callback(result);       
//       });
//  }


function call_app(txn_uuid, from_address, bapp, request, callback) {
     //const { spawn } = require("child_process");
     const bapp_dir = "/home/blockumulus/blockumulus/bapps";
     
     rss = request.split(" ");
     console.log(`RSS: ${rss}`);
     var A = [`${bapp_dir}/${bapp}/code.py`, `${txn_uuid}`, `${from_address}`].concat(rss);
 
     console.log(`A@: ${A}`);
     
     const { spawn } = require('child_process');

     const subprocess = spawn('python3', A);

     subprocess.stdout.on('data', (data) => {
          console.log(`@call_app data: ${data}`);
          return callback(data.toString());
     });

     // subprocess.on('close', (code) => {
     //      console.log(`child process close all stdio with code ${code}`);
     //      return callback("hi");
     // });
        
     // subprocess.on('exit', (code) => {
     //      console.log(`child process exited with code ${code}`);
     //      return callback("bye");
     // });
 }
 
 module.exports = { call_app };