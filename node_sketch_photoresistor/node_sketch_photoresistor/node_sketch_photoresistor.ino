/* connect one leg of the photoresistor to A0 and the other to +5V
 * connecg a resistor (around 10k is a good value, higher values 
 * give higher readings) from 0 to GND.
 */

const int lightPin = A0;    // select the input pin for the potentiometer
const int ledPin = 11;   // select the pin for the LED
int sensorVal = 1023; // store a value from the lightpin (0-1023)

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);  // declare the ledPin as an OUTPUT
pinMode (lightPin, INPUT);
}

void loop() {
  
  sensorVal = analogRead(lightPin);
  digitalWrite(ledPin, HIGH);  // turn the ledPin on
  delay(sensorVal);                  // stop the program for some time
  digitalWrite(ledPin, LOW);   // turn the ledPin off
  delay(sensorVal);                  // stop the program for some time
  Serial.println(sensorVal);
  delay(1);
}


/*Serial.println(analogRead(lightPin));
  analogWrite(ledPin, analogRead(lightPin)/4);
  delay(10);*/
