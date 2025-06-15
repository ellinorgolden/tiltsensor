#include <Arduino.h> 

const int tiltPin = 8; // Definerer hvilken digital pin tilt-sensoren er koblet til (her: D8)
  
void setup() {
  pinMode(tiltPin, INPUT); 
  Serial.begin(115200);  // 115200 baudrate 
}

void loop() {
   Serial.println(digitalRead(tiltPin));
  int status = digitalRead(tiltPin);  // tilt-sensoren: HIGH (1) = opp, LOW (0) = ned
  Serial.println(status);           
  delay(500); 
}