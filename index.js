
// Thus is a super fast background remover by Nex Core. It's using 4 api that's why It's response in 1-2 seconds. If It's really useful for you, Than just Follow me on githun & Instagram & Give me a star on this repository. ☣️Dont change the author name, If you change it than you got banned permanently from this.☣️ 

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting NEX-RBG Server...');
const server = spawn('node', ['nexcore.js'], {
  stdio: 'inherit',
  cwd: __dirname
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
});

console.log('✅ Server initialization complete');