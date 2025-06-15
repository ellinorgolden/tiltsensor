# TiltSensor – Angular + Arduino-prosjektorindikator

TiltSensor er et sanntids webgrensesnitt laget med Angular og koblet til en fysisk Arduino-enhet med en tilt-sensor. Applikasjonen visualiserer sensorens status ved å vise et SVG-ikon av en projektor som roteres opp-ned når sensoren indikerer at enheten er snudd.

## Funksjonalitet

- Viser sanntidsstatus fra tilt-sensor (opp eller ned)
- Roterer SVG-projektorikonet basert på sensorens verdi
- Angular-basert frontend med standalone-komponenter
- WebSocket-basert kommunikasjon mellom frontend og backend
- Node.js Express-server med SerialPort-integrasjon for Arduino-data

## Teknologier brukt

- **Frontend:** Angular 20 (standalone components)
- **Backend:** Node.js, Express, Socket.IO, SerialPort
- **Maskinvare:** Arduino med digital tilt-sensor tilkoblet digital pin (D8)
- **Visualisering:** Inline SVG med rotasjon via Angular `ngStyle`

## Prosjektstruktur

tiltsensor/
├── frontend/ # Angular-prosjekt
│ ├── src/assets/ # SVG-bilder
│ ├── src/app/ # Komponenter og tjenester
│ │ ├── app.ts # Rotkomponent
│ │ ├── app.html # Mal med SVG-visning
│ │ └── tilt.service.ts# WebSocket-klient
├── server.js # Node.js-server for serieport og Socket.IO
├── platformio.ini # Konfigurasjon for Arduino via PlatformIO
├── src/ # Arduino-kildekode
│ └── main.cpp


## Krav

- Node.js v18+
- Arduino tilkoblet PC via USB
- Tilt-sensor koblet til pin D8
- PlatformIO eller Arduino IDE for å laste opp kode til Arduino

### 1. Installer avhengigheter

```bash
cd tiltsensor
npm install
cd frontend
npm install

### 2. Kjør backend-server
cd tiltsensor
node server.js

### 3. Start Angular-applikasjonen
cd frontend
npm start

Åpne nettleseren og gå til http://localhost:4200

### Arduino-tilkobling
VCC → 5V

GND → GND

D0 → Digital pin 8 (eller annen valgfri pin, juster i koden)

Bruk eventuelt en pull-down-motstand (10k ohm)

