const { SerialPort } = require('serialport'); 
const { ReadlineParser } = require('@serialport/parser-readline'); 
const express = require('express'); 
const cors = require('cors'); 
const http = require('http'); 
const socketIo = require('socket.io'); 

const portName = 'COM3'; 
const baudRate = 115200;   

const serialPort = new SerialPort({ path: portName, baudRate });

const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

const app = express();

app.use(cors());

const server = http.createServer(app);


const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:4200', 
    methods: ['GET', 'POST'],        
    // credentials: true                
  }
});

parser.on('data', (data) => {
  const trimmed = data.trim();       
  const isUp = trimmed === '1';     
  console.log('Fra Arduino:', isUp); 
  io.emit('tilt-status', isUp);      
});


server.listen(3000, () => {
  console.log('Node-server kjører på http://localhost:3000');
});