#include <Wire.h>
#include <Servo.h>

Servo myservo;

#define MICROSECONDS 0
int microseconds = 1500;
int i2c_channel;

void setup() {
  // We attach our servo to pin 11
  myservo.attach(11);
  
  // If an I2C address is not specified then we join as master.
  // We initialize i2c as slave with 4 as our address.
  Wire.begin(0x04);
  
  // We provide callback functions to handle the I2C interrupts
  Wire.onReceive(handleIncoming);
  Wire.onRequest(handleOutgoing);

  pinMode(11, OUTPUT);
}

void loop() {
  // We limit the servo value to the range 1000-2000
  double val = constrain(microseconds,1000,2000);
  myservo.writeMicroseconds(val);
}

void handleIncoming(int byteCount){
  i2c_channel = Wire.read();
  int ls = Wire.read();
  int ms = Wire.read();
  
  switch(i2c_channel){
    case MICROSECONDS:
      microseconds = (ms << 8) | ls;
      Serial.print(microseconds);
      break;
  }

  // Flush if remaining
  while(Wire.available())
    Wire.read();
}

void handleOutgoing(){
}