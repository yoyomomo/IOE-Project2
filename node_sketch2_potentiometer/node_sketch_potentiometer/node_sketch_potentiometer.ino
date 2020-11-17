int potPin = A2;    // select the input pin for the potentiometer
int ledPin = 8;   // select the pin for the LED
int sensorVal = 0;       // variable to store the value coming from the sensor


void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);  // declare the ledPin as an OUTPUT
}

void loop() {
  sensorVal = analogRead(potPin);    // read the value from the sensor
  digitalWrite(ledPin, HIGH);  // turn the ledPin on
  delay(sensorVal);                  // stop the program for some time
  digitalWrite(ledPin, LOW);   // turn the ledPin off
  //delay(sensorVal);                  // stop the program for some time
  Serial.println(sensorVal);    //print the sensor/potentiometer value to the serial
  delay(1);
}
