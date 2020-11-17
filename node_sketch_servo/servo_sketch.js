/*
Serial write example
Sends a byte to a webSocket server which sends the same byte
out through a serial port.
You can use this with the included Arduino example called PhysicalPixel.
Works with P5 editor as the socket/serial server, version 0.5.5 or later.
written 2 Oct 2015
by Tom Igoe
*/

// Declare a "SerialPort" object
var serial;
var options = {
    baudRate: 9600
};
var portName = '/dev/tty.usbmodem14201'; // fill in your serial port name here
var inData;
// this is the message that will be sent to the Arduino:
var outMessage1 = 'H';
var outMessage2 = 'M';



function setup() {
    createCanvas(windowWidth, windowHeight);

    // make an instance of the SerialPort object
    serial = new p5.SerialPort();

    // Get a list the ports available
    // You should have a callback defined to see the results. See gotList, below:
    serial.list();

    // Assuming our Arduino is connected,  open the connection to it
    serial.open(portName, options);

    // When you get a list of serial ports that are available
    serial.on('list', gotList);

    // When you some data from the serial port
    serial.on('data', gotData);
}


// Got the list of ports
function gotList(thelist) {
    console.log("List of Serial Ports:");
    // theList is an array of their names
    for (var i = 0; i < thelist.length; i++) {
        // Display in the console
        console.log(i + " " + thelist[i]);
    }
}

// Called when there is data available from the serial port
function gotData() {
    var currentString = serial.readLine();
    console.log(currentString);
}

function draw() {
    //    background(200, 200, 200);
    //    fill(255, 0, 0);
    //    textSize(20);
    //    textFont('Georgia');
    //    text("click to rotate the servo", mouseX, mouseY);

    let c = map((100 / inData), 0, width, 0, 175);
    // Scale the mouseX value from 0 to 720 to a range between 40 and 300
    fill(255, c, 0);
    ellipse(width / 2, height / 2, d, d);
}
// When you click on the screen, the server sends H or L out the serial port
//function mouseReleased() {
//    serial.write(outMessage1);
//    if (outMessage1 === 'H') {
//        outMessage1 = 'L';
//    } else {
//        outMessage1 = 'H'
//    }
//}
//
//function mousePressed() {
//    serial.write(outMessage2);
//    if (outMessage2 === 'M') {
//        outMessage2 = 'M'
//    } else {
//        outMessage2 = 'F'
//    }
//}
//
//function keyPressed() {
//    serial.write(outMessage2);
//    if (outMessage2 === 'M') {
//        outMessage2 = 'F'
//    } else {
//        outMessage2 = 'M'
//    }
//}
