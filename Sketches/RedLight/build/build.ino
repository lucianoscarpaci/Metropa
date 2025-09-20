#include <CurieIMU.h>
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.begin(9600);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}