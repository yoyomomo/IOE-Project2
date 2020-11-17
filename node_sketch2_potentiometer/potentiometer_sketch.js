// Be sure to choose File > Import Library > p5.serialport.js from the P5 IDE main menu to load serial library

// Terminal command to install p5.serialserver:  npm install p5.serialserver
// Terminal command to start server:  node ~/node_modules/p5.serialserver/startserver.js

//Noise map used in this code: https://p5js.org/examples/math-noise-wave.html

var serial; // variable to hold an instance of the serialport library
var options = {
    baudRate: 9600
}; // set baudrate to 9600; must match Arduino baudrate
var portName = '/dev/tty.usbmodem14201'; // fill in your serial port name here
var inData; // for incoming serial data
var slider;
var yoff = 0;

function setup() {
    createCanvas(windowWidth, windowHeight); // make the canvas
    serial = new p5.SerialPort(); // make a new instance of the serialport library
    serial.on('data', serialEvent); // callback for when new data arrives
    serial.on('error', serialError); // callback for errors
    serial.open(portName, options); // open a serial port @ 9600


}

function draw() {
    background(0);

    stroke(255);
    noFill();
    beginShape();

    //var xoff = 0; // Option #1: 2D Noise
    let xoff = yoff; // Option #2: 1D Noise

    // Iterate over horizontal pixels
    for (var x = 0; x <= width; x += 5) {
        // Calculate a y value according to noise, map to

        // Option #1: 2D Noise
        //yoff = yoff + inData / 10);
        //console.log(inData);
        //var plsWork = map(inData, 0, 1023, 0, 1);
        var y = map(noise(xoff, yoff), (1000 / inData), 0, 1, windowWidth / 2, 300);
        //yoff = y + plsWork;
        //console.log(y);
        // Option #2: 1D Noise
        //let y = map(noise(xoff), 0, 1, 200, 300);

        // Set the vertex
        vertex(x, y);
        // Increment x dimension for noise
        xoff += 0.5;
    }
    // increment y dimension for noise
    yoff += 0.1;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}

//text("sensor value: " + inData, windowWidth / 2, 30);
//text("background value: " + mappedBackground, windowWidth / 2, 50);
//}



function serialEvent() {
    // inData = Number(serial.read());   // can use this when just looking for 1 byte msgs from Arduino

    // Alternatively, read a string from the serial port, looking for new line as data separator:
    var inString = serial.readStringUntil('\r\n');
    // check to see that there's actually a string there:
    if (inString.length > 0) {
        // convert it to a number:
        inData = Number(inString);
    }
}


function serialError(err) {
    println('Something went wrong with the serial port. ' + err);
}
