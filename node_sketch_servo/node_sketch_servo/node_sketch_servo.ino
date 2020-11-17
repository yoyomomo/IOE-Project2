#include <Servo.h>;
//# define TURN_TIME 2
 //serial read
 int incomingByte; 
 // servo pin
 const int servoPin = 3;
 Servo servo;

void setup()
{
  // initialize serial communication:
  Serial.begin(9600);
  servo.attach (servoPin);
  servo.write(90); // 0 means max speed clockwise, 90 means no motion, 180 means max speed counter-clockwise 
  
  
}
void loop()
{
    
  if (Serial.available() > 0) 
  {
    incomingByte = Serial.read();
    }
    
  if(incomingByte == 'H'){
    servo.write (75); // rotate clockwise at 1/6 speed
  }
  if (incomingByte == 'L') {
    servo.write(90);// stop the servo
  }
  if(incomingByte == 'M'){
    servo.write (0); 
  }
  if(incomingByte == 'F'){
    servo.write (180); 
  }  
}
