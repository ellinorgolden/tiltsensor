#include <Arduino.h>

const int tiltPin = 8;  // Tilkoblet til 8 på Arduino

void setup() {
  pinMode(tiltPin, INPUT);     // Sett opp tiltPin som input
  Serial.begin(9600);          // Start seriell kommunikasjon
}

void loop() {
  int status = digitalRead(tiltPin);  // Les verdien fra sensoren

  if (status == HIGH) {
    Serial.println("Tilt-sensor: up");
  } else {
    Serial.println("Tilt-sensor: down");
  }

  delay(500);  // Vent litt for å unngå spam
}